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
# 创建一个app对象
app = Flask(__name__)

# 根路由
@app.route("/")
def index():
    return render_template("index.html")

# 根路由
@app.route("/wide")
def index_wide():
    return render_template("index_wide.html")

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
    bpu0 = open('/sys/devices/system/bpu/bpu0/ratio', 'r', encoding='utf-8')
    bpu1 = open('/sys/devices/system/bpu/bpu1/ratio', 'r', encoding='utf-8')
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
    app.run(debug=True, host="0.0.0.0")