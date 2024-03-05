# Performance Node

# RDK X3 & RDK X3 Module

该应用基于Web网页打造，无论是什么品牌的电脑和手机，只需要在浏览器访问即可。

<img src=".\doc\desktop_demo.jpg" alt="desktop_demo" style="zoom:70%;" />

<img src=".\doc\mult_device.jpg" alt="mult_device" style="zoom:70%;" />

安装requirements，主要是Flask和pstiul

```bash
pip install -r requirements.txt -i http://mirrors.aliyun.com/pypi/simple/ --trusted-host mirrors.aliyun.com
```

运行app.py

```
python3 app.py
```

在同一局域网访问X3的5000端口即可

```bash
192.168.xxx.xxx:5000
```




### BPU调频策略
查看BPU支持的调频策略
```bash
cat /sys/devices/system/bpu/bpu0/devfreq/devfreq1/available_governors
cat /sys/devices/system/bpu/bpu1/devfreq/devfreq1/available_governors
```
更改BPU模式
bpu_ondemand powersave performance simple_ondemand
```bash
sudo bash -c "echo performance > /sys/devices/system/bpu/bpu0/devfreq/devfreq1/governor"
sudo bash -c "echo performance > /sys/devices/system/bpu/bpu1/devfreq/devfreq2/governor"
```

### CPU调频策略
```bash
cat /sys/devices/system/cpu/cpufreq/policy0/scaling_available_governors
```
更改CPU模式
conservative: 需要时逐级调整
ondemand: 需要时立刻调整
powersave: 节能
performance: 性能
```bash
sudo bash -c "echo performance > /sys/devices/system/cpu/cpufreq/policy0/scaling_governor"
sudo bash -c "echo conservative > /sys/devices/system/cpu/cpufreq/policy0/scaling_governor"
```

