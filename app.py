# Copyright (c) 2023, Horizon Robotics.
# 
# Licensed under the Apache License, Version 2.0 (the "License");
# you may not use this file except in compliance with the License.
# You may obtain a copy of the License at
#
#      http://www.apache.org/licenses/LICENSE-2.0
#
# Unless required by applicable law or agreed to in writing, software
# distributed under the License is distributed on an "AS IS" BASIS,
# WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
# See the License for the specific language governing permissions and
# limitations under the License.

from flask import Flask, render_template
from psutil import cpu_percent, virtual_memory, disk_usage
import argparse

DEVICE_NAME = "rdkx3"
DEVICE_NUM = 0 # 0:rdkx3, 1:rdkultra

# Flask app
app = Flask(__name__)
@app.route("/")
def index():
    return render_template(DEVICE_NAME + ".html")

@app.route("/wide")
def index_wide():
    return render_template(DEVICE_NAME + "_wide.html")

# 请求CPU, BPU, Memory, Tempture 信息（快速）
@app.route("/getState")
def getState():
    stateString = ""
    ## CPU
    # cpu0, cpu1, cpu2, cpu3,
    cpus = cpu_percent(percpu=True)
    stateString += "%.2f,%.2f,%.2f,%.2f,"%((cpus[0],cpus[1],cpus[2],cpus[3]))
    
    ## Memory
    # memory_free, memoryrate, (MiB)
    memorys = virtual_memory()
    stateString += "%012d,%012d,"%(memorys[3], memorys[1])
    
    ## BPU  ## Temp
    bpu0 = open('/sys/DEVICE_NAMEs/system/bpu/bpu0/ratio', 'r', encoding='utf-8')
    bpu1 = open('/sys/DEVICE_NAMEs/system/bpu/bpu1/ratio', 'r', encoding='utf-8')
    cpu_temp = open('/sys/class/hwmon/hwmon0/temp1_input', 'r',  encoding='utf-8')
    stateString += "%03d,%03d,"%(int(bpu0.read()), int(bpu1.read()))
    stateString += cpu_temp.read()[0:5]
    bpu0.close()
    bpu1.close()
    cpu_temp.close()

    return stateString

# 请求磁盘占用信息（慢速）
@app.route("/getDisk")
def getDisk():
    ## 磁盘信息
    ## total, free
    disk_info = disk_usage("/")
    disk_info_string = "%014d,%014d"%(disk_info[1],disk_info[2])
    return disk_info_string

if __name__ == "__main__":
    # 设备判断(根据设备树)
    tree = open('/sys/firmware/DEVICE_NAMEtree/base/model', 'r', encoding='utf-8').read()
    if "X3" in tree :
        DEVICE_NAME = "rdkx3"
        DEVICE_NUM = 0
    elif "Journey 5" in tree:
        DEVICE_NAME = "rdkultra"
        DEVICE_NUM = 1
    elif "X5" in tree:
        DEVICE_NAME = "rdkx5"
        DEVICE_NUM = 2
    else:
        print("Your device didn't support.")
        exit()

    # 用户输入
    parser = argparse.ArgumentParser()
    parser.add_argument('--device', type=str, default='-1', help='0: RDK X3\n1: RDK Ultra\n2: RDK X5\n')
    opt = parser.parse_args()

    # 启动应用
    app.run(debug=True, host="0.0.0.0")