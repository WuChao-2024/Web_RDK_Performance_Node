# Performance Node

该应用基于Web网页打造,无论是什么品牌的电脑和手机,只需要在浏览器访问即可.

<img src=".\doc\desktop_demo.jpg" alt="desktop_demo" style="zoom:70%;" />

<img src=".\doc\mult_device.jpg" alt="mult_device" style="zoom:70%;" />

## 1. 使用方法

### 1.1 安装requirements,主要是Flask和pstiul

```bash
pip install -r requirements.txt -i http://mirrors.aliyun.com/pypi/simple/ --trusted-host mirrors.aliyun.com
```

### 1.2 运行app.py

```bash
python3 app.py
```

### 1.3 在同一局域网访问X3的7999端口即可

```bash
192.168.xxx.xxx:7999
```

## 2. 参数说明
```bash
$ python3 app.py --help
usage: app.py [-h] [--device DEVICE] [--port PORT] [--debug DEBUG] [--log LOG]

optional arguments:
  -h, --help       show this help message and exit
  --device DEVICE  0: RDK X3 (Module), 1: RDK Ultra, 2: RDK X5
  --port PORT      enter the port you like.
  --debug DEBUG    Flask Debug Mode, 0:false, 1:true.
  --log LOG        Flask log, 0:false, 1:true.
```
例如,你要手动指定板卡为RDK Ultra, 使用6666号端口, 并且打开debug模式, 打开Flask的log显示, 可以这样使用: 
```bash
python3 app.py --device 1 --port 6666 --debug 1 --log 1
```

### 默认参数
`--device` 参数默认值为-1, 表示自动判断设备, 程序会根据当前设备使用的设备树文件来自动判断.
`--port` 参数默认值为7999, 比TROS的8000少1, 向伟大的TROS致敬!
`--debug` 参数默认值为0, 即为false, 默认关闭Flask的Debug模式.
`--log` 参数默认值为0, 即为false, 默认关闭Flask的HTTP请求响应日志打印.
 
## 3. 数据说明
### 3.1 CPU数据
使用`psutil.cpu_percent(percpu=True)`函数来获取各个逻辑处理器（核心）的CPU使用百分比.当percpu参数设置为True时,函数将返回一个包含所有CPU利用率百分比的列表,其中列表的第一个元素对应第一个CPU核心,第二个元素对应第二个核心,以此类推.列表中各元素的位置在每次调用中保持一致.

内部实现上,该函数维护了一个全局映射表（字典）,其中每个键是调用线程的ID（通过threading.get_ident获取）.这意味着即使在不同线程中、以不同间隔时间调用该函数,也能得到有意义且相互独立的结果.

psutil文档(5.9.8)原文:
When percpu is True returns a list of floats representing the utilization as a percentage for each CPU. First element of the list refers to first CPU, second element to second CPU and so on. The order of the list is consistent across calls. Internally this function maintains a global map (a dict) where each key is the ID of the calling thread (threading.get_ident). This means it can be called from different threads, at different intervals, and still return meaningful and independent results.

### 3.2 BPU数据
BPU占用率数据来自于以下文件
#### RDK X3, RDK X3 Module, RDK Ultra
```bash
/sys/devices/system/bpu/bpu0/ratio
/sys/devices/system/bpu/bpu1/ratio
```
### 3.3 内存占用数据
#### RDK X3, RDK X3 Module, RDK Ultra
通过`psutil.virtual_memory()`函数获取内存信息,该函数返回一个命名元组,包含多种关于系统虚拟内存的信息.

`available`字段: 可用内存, 指无需系统进入交换状态即可立即分配给进程的内存总量. 这个值是通过对不同平台下不同内存指标进行求和计算得出的, 旨在提供一种跨平台监控实际内存使用情况的方法.

psutil文档(5.9.8)原文: available: the memory that can be given instantly to processes without the system going into swap. This is calculated by summing different memory metrics that vary depending on the platform. It is supposed to be used to monitor actual memory usage in a cross platform fashion.

`used`字段: 已使用内存, 已使用的内存大小会根据不同平台有所差异,并且主要用于信息展示目的.需要注意的是, "total - free" (总内存减去空闲内存) 并不一定与“used”（已使用内存）相匹配.

psutil文档(5.9.8)原文: used: memory used, calculated differently depending on the platform and designed for informational purposes only. total - free does not necessarily match used.

### 3.4 温度数据
温度数据来自于以下文件
#### RDK X3, RDK X3 Module
```bash
/sys/class/hwmon/hwmon0/temp1_input
```

#### RDK Ultra

RDK Ultra有多个温度点,此处选择的是cpu-thermal.
```bash
/sys/devices/virtual/thermal/thermal_zone8/temp
```


可通过以下命令来查看所有温度传感器: 
```bash
cat /sys/devices/virtual/thermal/thermal_zone*/type
```

可根据需要修改Web上显示的温度传感器数据
```bash
cat /sys/devices/virtual/thermal/thermal_zone*/temp
```

### 3.4 频率数据
#### RDK X3, RDK X3 Module
这两个设备的CPU是统一调度,所以读取一个文件即可
```bash
/sys/devices/system/cpu/cpufreq/policy0/cpuinfo_cur_freq
```
#### RDK Ultra
在RDK Ultra上,需要读取8个文件,对系统负载影响较大,故不采集这个数据.

### 3.5 硬盘数据
#### RDK X3, RDK X3 Module, RDK Ultra
通过`psutil.disk_usage()`函数获取内存信息, 我们可以获取指定路径所在磁盘分区的使用情况统计数据.此函数返回一个命名元组,包含了以字节为单位表示的总容量、已用空间和剩余可用空间,以及磁盘使用率百分比.

Performance Node使用了以下两个字段, 与Unix/Linux系统中的`df`命令行工具输出的数据是匹配的.

`used` 字段: 已用存储, 表示已使用的总空间

`free` 字段: 可用存储, 普通用户可用的空间大小

psutil文档(5.9.8)原文: Return disk usage statistics about the partition which contains the given path as a named tuple including total, used and free space expressed in bytes, plus the percentage usage. OSError is raised if path does not exist. Starting from Python 3.3 this is also available as shutil.disk_usage (see BPO-12442). See disk_usage.py script providing an example usage.

Note UNIX usually reserves 5% of the total disk space for the root user. total and used fields on UNIX refer to the overall total and used space, whereas free represents the space available for the user and percent represents the user utilization (see source code). That is why percent value may look 5% bigger than what you would expect it to be. Also note that both 4 values match “df” cmdline utility.

### 3.6 性能模式设置

Perfoemace Node的主要实现方式为利用`os.system()`函数向命令行发送命令, 从而达到修改处理器调频模式的目的.Performance Node可调整的模式解释如下:

- 性能(performance): 总是将CPU置于最高能耗也是最高性能的状态, 即硬件所支持的最高频.
- 节能(powersave): 总是将CPU置于最低能耗也是最差性能的状态, 即硬件所支持的最低频.
- 调度信息(schedutil): 这是从Linux-4.7版本开始才引入的策略, 其原理是根据调度器所提供的CPU利用率信息进行频率调节,效果上类似于ondemand策略, 但是因为调度器掌握了最好的CPU使用情况, 更加精确和自然.

关于ondemand策略: 

- 按需(ondemand): 定时检查负载,然后根据负载来调节频率.负载低的时候调节至一个刚好能够满足当前负载需求的最低频,当负载高时,立即提升到最高性能状态.

在Web中, 使用了一个防抖函数, 每次都在最后一次切换后的2秒后进行切换. 

#### RDK X3, RDK X3 Module
```bash
sudo bash -c "echo performance > /sys/devices/system/cpu/cpufreq/policy0/scaling_governor"
```

#### RDK Ultra
```bash
sudo bash -c "echo performance > /sys/devices/system/cpu/cpufreq/policy0/scaling_governor" && \
sudo bash -c "echo performance > /sys/devices/system/cpu/cpufreq/policy1/scaling_governor" && \
sudo bash -c "echo performance > /sys/devices/system/cpu/cpufreq/policy2/scaling_governor" && \
sudo bash -c "echo performance > /sys/devices/system/cpu/cpufreq/policy3/scaling_governor" && \
sudo bash -c "echo performance > /sys/devices/system/cpu/cpufreq/policy4/scaling_governor" && \
sudo bash -c "echo performance > /sys/devices/system/cpu/cpufreq/policy5/scaling_governor" && \
sudo bash -c "echo performance > /sys/devices/system/cpu/cpufreq/policy6/scaling_governor" && \
sudo bash -c "echo performance > /sys/devices/system/cpu/cpufreq/policy7/scaling_governor"
```

## 反馈
如果有问题,欢迎给我提交issue或者PR.

欢迎您参加Performance Node 满意度调查：
<img src=".\doc\survey.jpg" alt="survey" style="zoom:20%;" />