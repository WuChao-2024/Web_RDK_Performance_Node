
//Echarts图表
// CPU
var cpu_chart = echarts.init(
    document.getElementById('cpu'),
    null,
    {
        renderer: "svg",
    });
var cpu_option = {
    animation: false,
    title: {
        text: 'CPU Total \n%'
    },
    tooltip: {
        trigger: 'axis',
        axisPointer: {
            type: 'cross',
            label: {
                backgroundColor: '#6a7985'
            }
        }
    },
    legend: {
        data: ['CPU_0', 'CPU_1', 'CPU_2', 'CPU_3']
    },
    toolbox: {
        feature: {
            dataZoom: {
                xAxisIndex: 'none'
            },
            saveAsImage: {}
        }
    },
    grid: {
        left: '0%',
        right: '0%',
        bottom: '0%',
        containLabel: true
    },
    xAxis: [
        {
            type: 'category',
            boundaryGap: false,
            data: ["", "", "", "", "", "", "", "", "", "",
                "", "", "", "", "", "", "", "", "", "",
                "", "", "", "", "", "", "", "", "", "",
                "", "", "", "", "", "", "", "", "", "",
                "", "", "", "", "", "", "", "", "", "",
                "", "", "", "", "", "", "", "", "", "",
                "", "", "", "", "", "", "", "", "", "",
                "", "", "", "", "", "", "", "", "", "",
                "", "", "", "", "", "", "", "", "", "",
                "", "", "", "", "", "", "", "", "", "",
                "", "", "", "", "", "", "", "", "", "",
                "", "", "", "", "", "", "", "", "", ""]
        }
    ],
    yAxis: [
        {
            type: 'value',
            max: 400.00
        }
    ],
    series: [
        {
            symbol: "none",
            name: 'CPU_0',
            type: 'line',
            stack: 'Total',
            areaStyle: {},
            emphasis: {
                focus: 'series'
            },
            data: []
        },
        {
            symbol: "none",
            name: 'CPU_1',
            type: 'line',
            stack: 'Total',
            areaStyle: {},
            emphasis: {
                focus: 'series'
            },
            data: []
        },
        {
            symbol: "none",
            name: 'CPU_2',
            type: 'line',
            stack: 'Total',
            areaStyle: {},
            emphasis: {
                focus: 'series'
            },
            data: []
        },
        {
            symbol: "none",
            name: 'CPU_3',
            type: 'line',
            stack: 'Total',
            areaStyle: {},
            emphasis: {
                focus: 'series'
            },
            data: []
        },
    ]
};
cpu_chart.setOption(cpu_option);


// BPU
var bpu_chart = echarts.init(
    document.getElementById('bpu'),
    null,
    {
        renderer: "svg",
    });
var bpu_option = {
    animation: false,
    title: {
        text: 'BPU Total\n%'
    },
    tooltip: {
        trigger: 'axis',
        axisPointer: {
            type: 'cross',
            label: {
                backgroundColor: '#6a7985'
            }
        }
    },
    legend: {
        data: ['BPU_0', 'BPU_1']
    },
    toolbox: {
        feature: {
            dataZoom: {
                xAxisIndex: 'none'
            },
            saveAsImage: {}
        }
    },
    grid: {
        left: '0%',
        right: '0%',
        bottom: '0%',
        containLabel: true
    },
    xAxis: [
        {
            type: 'category',
            boundaryGap: false,
            data: ["", "", "", "", "", "", "", "", "", "",
                "", "", "", "", "", "", "", "", "", "",
                "", "", "", "", "", "", "", "", "", "",
                "", "", "", "", "", "", "", "", "", "",
                "", "", "", "", "", "", "", "", "", "",
                "", "", "", "", "", "", "", "", "", "",
                "", "", "", "", "", "", "", "", "", "",
                "", "", "", "", "", "", "", "", "", "",
                "", "", "", "", "", "", "", "", "", "",
                "", "", "", "", "", "", "", "", "", "",
                "", "", "", "", "", "", "", "", "", "",
                "", "", "", "", "", "", "", "", "", ""]
        }
    ],
    yAxis: [
        {
            type: 'value',
            max: 200.00
        }
    ],
    series: [
        {
            symbol: "none",
            name: 'BPU_0',
            type: 'line',
            stack: 'Total',
            areaStyle: {},
            emphasis: {
                focus: 'series'
            },
            data: []
        },
        {
            symbol: "none",
            name: 'BPU_1',
            type: 'line',
            stack: 'Total',
            areaStyle: {},
            emphasis: {
                focus: 'series'
            },
            data: []
        }
    ]
};
bpu_chart.setOption(bpu_option);

// Memory
var mem_chart = echarts.init(
    document.getElementById('memory'),
    null,
    {
        renderer: "svg",
    });
var mem_option = {
    animation: false,
    title: {
        text: 'Memory\nMiB'
    },
    tooltip: {
        trigger: 'axis',
        axisPointer: {
            type: 'cross',
            label: {
                backgroundColor: '#6a7985'
            }
        }
    },
    legend: {
        data: ['Used', 'Free']
    },
    toolbox: {
        feature: {
            dataZoom: {
                xAxisIndex: 'none'
            },
            saveAsImage: {}
        }
    },
    grid: {
        left: '0%',
        right: '0%',
        bottom: '0%',
        containLabel: true
    },
    xAxis: [
        {
            type: 'category',
            boundaryGap: false,
            data: ["", "", "", "", "", "", "", "", "", "",
                "", "", "", "", "", "", "", "", "", "",
                "", "", "", "", "", "", "", "", "", "",
                "", "", "", "", "", "", "", "", "", "",
                "", "", "", "", "", "", "", "", "", "",
                "", "", "", "", "", "", "", "", "", "",
                "", "", "", "", "", "", "", "", "", "",
                "", "", "", "", "", "", "", "", "", "",
                "", "", "", "", "", "", "", "", "", "",
                "", "", "", "", "", "", "", "", "", "",
                "", "", "", "", "", "", "", "", "", "",
                "", "", "", "", "", "", "", "", "", ""]
        }
    ],
    yAxis: [
        {
            type: 'value'
        }
    ],
    series: [
        {
            symbol: "none",
            name: 'Used',
            type: 'line',
            stack: 'Total',
            areaStyle: {},
            emphasis: {
                focus: 'series'
            },
            data: []
        },
        {
            symbol: "none",
            name: 'Free',
            type: 'line',
            stack: 'Total',
            areaStyle: {},
            emphasis: {
                focus: 'series'
            },
            data: []
        }
    ]
};
mem_chart.setOption(mem_option);

// Disk
var disk_chart = echarts.init(
    document.getElementById('disk'),
    null,
    {
        renderer: "svg",
    });
var disk_option = {
    title: {
        text: 'Disk\n -.--% (GiB)'
    },
    tooltip: {
        trigger: 'axis',
        axisPointer: {
            // Use axis to trigger tooltip
            type: 'shadow' // 'shadow' as default; can also be 'line' or 'shadow'
        }
    },
    legend: {},
    grid: {
        left: '0%',
        right: '0%',
        bottom: '0%',
        containLabel: true
    },
    xAxis: {
        type: 'value',
        "show": false,
        min: 0, // 起始
        max: 64 // 终止
    },
    yAxis: {
        "show": false,
        type: 'category',
        data: ['']
    },
    series: [
        {
            name: 'Used',
            type: 'bar',
            stack: 'total',
            label: {
                show: true
            },
            emphasis: {
                focus: 'series'
            },
            data: [0]
        },
        {
            name: 'Free',
            type: 'bar',
            stack: 'total',
            label: {
                show: true
            },
            emphasis: {
                focus: 'series'
            },
            data: [0]
        }
    ]
};
disk_chart.setOption(disk_option);

// 变量
var time_interval = 1000; // 初始化时的间隔 100ms
var data_array_len = 120;
var sh_control;   // CPU, BPU, MEM状态更新的POST函数间隔任务的控制句柄
// 从stateString解析数据
var cpu_total, cpu_0, cpu_1, cpu_2, cpu_3;
var mem_rate, mem_free, mem_used;
var bpu_total, bpu_0, bpu1;
var temp;
// 从diskInfo解析数据
var disk_rate, disk_free, disk_used;
// 图表的数据
/// CPU
let cpu_0_data = new Array(data_array_len).fill(0.0);
let cpu_1_data = new Array(data_array_len).fill(0.0);
let cpu_2_data = new Array(data_array_len).fill(0.0);
let cpu_3_data = new Array(data_array_len).fill(0.0);

/// BPU
let bpu_0_data = new Array(data_array_len).fill(0.0);
let bpu_1_data = new Array(data_array_len).fill(0.0);

/// MEM
let mem_used_data = new Array(data_array_len).fill(0.0);
let mem_free_data = new Array(data_array_len).fill(0.0);


// 初始化函数
function boot_all_interval() {
    POST_disk();
    // 等待初始化函数，开始CPU, BPU, MEM状态更新的POST函数, 留下句柄以便更改间隔时销毁重建
    // cpu 数据初始化
    cpu_option.series[0].data = cpu_0_data;
    cpu_option.series[1].data = cpu_1_data;
    cpu_option.series[2].data = cpu_2_data;
    cpu_option.series[3].data = cpu_3_data;
    cpu_chart.setOption(cpu_option);
    // bpu 数据初始化
    bpu_option.series[0].data = bpu_0_data;
    bpu_option.series[1].data = bpu_1_data;
    bpu_chart.setOption(bpu_option);
    // mem 数据初始化
    mem_option.series[0].data = mem_used_data;
    mem_option.series[1].data = mem_free_data;
    mem_chart.setOption(mem_option);
    // 开始定时任务
    sh_control = setInterval(POST_state, time_interval);

    // 开始Disk状态更新的POST函数, 无需留下句柄
    setInterval(POST_disk, 4000);
}

//修改采样间隔
function setTime() {
    POST_state()
    var x = document.getElementById("setTime").value;
    document.getElementById("setTime").value = '';
    if (x == null || x == "") {
        alert("地平线实习生小吴提醒您：\n不能是空的哦~");
        return;
    }
    var pattern = /^(-)?\d+(\.\d+)?$/;
    if (pattern.exec(x) == null) {
        alert("地平线实习生小吴提醒您：\n要填写纯数字的哦~");
        return;
    }
    if (x < 10) {
        alert("地平线实习生小吴提醒您：\n设置到10ms以下会卡卡的哦~");
        return;
    }
    time_interval = x;
    document.getElementById("timeNow").innerHTML = x;
    // 清除定时任务
    clearInterval(sh_control);
    sh_control = setInterval(POST_state, time_interval);
}


//通讯部分
function POST_state() {
    // 向 RDK X3 发送请求，获得数据包
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            // 获得stateString
            stateString_split = this.responseText.split(",");
            // 解析stateString
            /// 温度部分
            temp = (parseFloat(stateString_split[8]) / 1000).toFixed(1);
            //// 更新温度看板数据
            document.getElementById("Temp").innerHTML = temp;
            /// CPU 部分
            //// 得到数据
            cpu_0 = parseFloat(stateString_split[0]);
            cpu_1 = parseFloat(stateString_split[1]);
            cpu_2 = parseFloat(stateString_split[2]);
            cpu_3 = parseFloat(stateString_split[3]);
            cpu_total = (cpu_0 + cpu_1 + cpu_2 + cpu_3).toFixed(1);
            //// 更新CPU数据看板的数据
            document.getElementById("CPU_Total").innerHTML = cpu_total;
            document.getElementById("CPU_0").innerHTML = cpu_0;
            document.getElementById("CPU_1").innerHTML = cpu_1;
            document.getElementById("CPU_2").innerHTML = cpu_2;
            document.getElementById("CPU_3").innerHTML = cpu_3;
            //// 更新CPU图表的数据
            cpu_0_data = cpu_0_data.slice(1);
            cpu_0_data.push(cpu_0);
            cpu_1_data = cpu_1_data.slice(1);
            cpu_1_data.push(cpu_1);
            cpu_2_data = cpu_2_data.slice(1);
            cpu_2_data.push(cpu_2);
            cpu_3_data = cpu_3_data.slice(1);
            cpu_3_data.push(cpu_3);
            //// 将CPU图表的数据设置使能图表
            if (cpu_total < 10) {
                cpu_option.title.text = 'CPU Total \n  ' + cpu_total + ' % (' + temp + '℃)';
            } else {
                cpu_option.title.text = 'CPU Total \n' + cpu_total + ' % (' + temp + '℃)';
            }
            cpu_option.series[0].data = cpu_0_data;
            cpu_option.series[1].data = cpu_1_data;
            cpu_option.series[2].data = cpu_2_data;
            cpu_option.series[3].data = cpu_3_data;
            cpu_chart.setOption(cpu_option);
            /// MEM 部分
            //// 得到数据
            mem_used = parseFloat(stateString_split[4]) / 1024 / 1024;
            mem_free = parseFloat(stateString_split[5]) / 1024 / 1024;
            //// 更新MEM看板数据
            mem_rate = (100 * mem_used / (mem_used + mem_free)).toFixed(1);
            document.getElementById("Mem").innerHTML = mem_rate;
            //// 更新MEM图表数据
            mem_used_data = mem_used_data.slice(1);
            mem_used_data.push(mem_used.toFixed(1));
            mem_free_data = mem_free_data.slice(1);
            mem_free_data.push(mem_free.toFixed(1));
            //// 将MEM图表的数据设置使能图表
            mem_option.title.text = 'Memory\n' + mem_rate + ' % (MiB)';
            mem_option.series[0].data = mem_used_data;
            mem_option.series[1].data = mem_free_data;
            mem_chart.setOption(mem_option);
            // bpu 部分
            //// 得到BPU数据
            bpu_0 = parseFloat(stateString_split[6]);
            bpu_1 = parseFloat(stateString_split[7]);
            bpu_total = (bpu_0 + bpu_1).toFixed(1);
            //// 更新BPU看板数据
            document.getElementById("BPU_Total").innerHTML = bpu_total;
            document.getElementById("BPU_0").innerHTML = bpu_0;
            document.getElementById("BPU_1").innerHTML = bpu_1;
            //// 更新 BPU 图表数据
            bpu_0_data = bpu_0_data.slice(1);
            bpu_0_data.push(bpu_0);
            bpu_1_data = bpu_1_data.slice(1);
            bpu_1_data.push(bpu_1);
            //// 将 BPU 图表的数据设置使能图表
            if (bpu_total < 10) {
                bpu_option.title.text = 'BPU Total\n  ' + bpu_total + ' %';
            } else {
                bpu_option.title.text = 'BPU Total\n' + bpu_total + ' %';
            }
            bpu_option.series[0].data = bpu_0_data;
            bpu_option.series[1].data = bpu_1_data;
            bpu_chart.setOption(bpu_option);
        }
    };
    xhttp.open("GET", "getState", true);
    xhttp.send();
}


function POST_disk() {
    // 向 RDK X3 发送请求，获得数据包
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            // 获得diskString
            stateString_split = this.responseText.split(",");
            // 解析stateString
            /// Disk 部分
            //// 得到数据
            disk_used = parseFloat(stateString_split[0]) / 1024 / 1024 / 1024;
            disk_free = parseFloat(stateString_split[1]) / 1024 / 1024 / 1024;
            disk_rate = (100 * disk_used / (disk_used + disk_free)).toFixed(1);
            //// 将Disk的数据设置使能图表
            disk_option.xAxis.max = disk_used + disk_free;
            disk_option.title.text = 'Disk\n' + disk_rate + ' % (GiB)';
            disk_option.series[0].data = [disk_used.toFixed(1)];
            disk_option.series[1].data = [disk_free.toFixed(1)];
            disk_chart.setOption(disk_option);
        }
    };
    xhttp.open("GET", "getDisk", true);
    xhttp.send();
}