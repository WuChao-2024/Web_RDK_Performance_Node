English| [简体中文](./README_cn.md)

# Performance Node
The Performance Node application is a web-based tool accessible via any computer or mobile device's browser regardless of brand. To set up and use the application:

<img src=".\doc\desktop_demo.jpg" alt="desktop_demo" style="zoom:70%;" />

<img src=".\doc\mult_device.jpg" alt="mult_device" style="zoom:70%;" />

1. **Installation**
   Install required packages, primarily Flask and psutil, using the following command:
   ```bash
   pip install -r requirements.txt -i http://mirrors.aliyun.com/pypi/simple/ --trusted-host mirrors.aliyun.com
   ```

2. **Running the Application**
   Execute the `app.py` file with:
   ```bash
   python3 app.py
   ```

3. **Accessing the Application**
   By default, the application listens on port 7999 within the same local network; access it via:
   ```
   http://192.168.xxx.xxx:7999
   ```

4. **Command Line Arguments**
   Users can manually specify parameters when running the application:
   ```bash
   python3 app.py --device 1 --port 6666 --debug 1 --log 1
   ```
   - `--device`: Choose the device type between RDK X3 (Module), RDK Ultra, or RDK X5; defaults to `-1` for automatic detection based on the device tree.
   - `--port`: Specify the desired port number; defaults to `7999`.
   - `--debug`: Enable Flask debug mode (`1` for true, `0` for false); default is disabled (`0`).
   - `--log`: Turn on Flask HTTP request/response logging (`1` for true, `0` for false); default is disabled (`0`).

5. **Data Collection**
   - **CPU Data**: The CPU usage percentages for each logical processor are obtained using `psutil.cpu_percent(percpu=True)`. A list of float values is returned, with each entry corresponding to the utilization of a specific CPU core, maintaining the same order across calls even when invoked from different threads.

   - **BPU Data**: BPU utilization data comes from files specific to the devices:
     - For RDK X3, RDK X3 Module, and RDK Ultra: `/sys/devices/system/bpu/bpu0/ratio` and `/sys/devices/system/bpu/bpu1/ratio`.

   - **Memory Data**: Memory usage stats are gathered through `psutil.virtual_memory()`, returning a named tuple with details such as `available` memory, which is the amount immediately allocatable to processes without swapping, and `used` memory, which is calculated differently across platforms and intended for informational purposes.

   - **Temperature Data**: Temperature readings come from different paths for each device:
     - RDK X3, RDK X3 Module: `/sys/class/hwmon/hwmon0/temp1_input`
     - RDK Ultra: `/sys/devices/virtual/thermal/thermal_zone8/temp` (among others)

   - **Frequency Data**:
     - RDK X3, RDK X3 Module read frequency data from one file: `/sys/devices/system/cpu/cpufreq/policy0/cpuinfo_cur_freq`.
     - RDK Ultra doesn't collect this data due to its impact on system load.

   - **Disk Usage Data**: Disk usage statistics are retrieved with `psutil.disk_usage()`, providing information about total capacity, used space, free space, and usage percentage for a specified directory. The `used` field indicates total used space while `free` represents available space for regular users.

6. **Performance Mode Settings**
   Performance modes can be changed by sending commands to the command line via `os.system()`:
   - For RDK X3 and RDK X3 Module, setting the CPU governor to 'performance' mode involves echoing the word 'performance' to a specific file.
   - For RDK Ultra, similar commands are run for all eight CPU policies.

The application includes various power/performance modes such as 'performance' (highest frequency), 'powersave' (lowest frequency), and 'schedutil' (Linux 4.7+ strategy adjusting frequency based on scheduler-provided CPU utilization info).

Users encountering issues can submit issues or pull requests. There's also a satisfaction survey for the Performance Node, displayed as an image link.

<img src=".\doc\survey.jpg" alt="survey" style="zoom:20%;" />