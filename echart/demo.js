'use strict';

var arr = new Array(365).toString().split(',');
var year = '2000-06-05,2000-06-06,2000-06-07,2000-06-08,2000-06-09,2000-06-10,2000-06-11,2000-06-12,2000-06-13,2000-06-14,2000-06-15,2000-06-16,2000-06-17,2000-06-18,2000-06-19,2000-06-20,2000-06-21,2000-06-22,2000-06-23,2000-06-24,2000-06-25,2000-06-26,2000-06-27,2000-06-28,2000-06-29,2000-06-30,2000-07-01,2000-07-02,2000-07-03,2000-07-04,2000-07-05,2000-07-06,2000-07-07,2000-07-08,2000-07-09,2000-07-10,2000-07-11,2000-07-12,2000-07-13,2000-07-14,2000-07-15,2000-07-16,2000-07-17,2000-07-18,2000-07-19,2000-07-20,2000-07-21,2000-07-22,2000-07-23,2000-07-24,2000-07-25,2000-07-26,2000-07-27,2000-07-28,2000-07-29,2000-07-30,2000-07-31,2000-08-01,2000-08-02,2000-08-03,2000-08-04,2000-08-05,2000-08-06,2000-08-07,2000-08-08,2000-08-09,2000-08-10,2000-08-11,2000-08-12,2000-08-13,2000-08-14,2000-08-15,2000-08-16,2000-08-17,2000-08-18,2000-08-19,2000-08-20,2000-08-21,2000-08-22,2000-08-23,2000-08-24,2000-08-25,2000-08-26,2000-08-27,2000-08-28,2000-08-29,2000-08-30,2000-08-31,2000-09-01,2000-09-02,2000-09-03,2000-09-04,2000-09-05,2000-09-06,2000-09-07,2000-09-08,2000-09-10,2000-09-11,2000-09-12,2000-09-13,2000-09-14,2000-09-15,2000-09-17,2000-09-18,2000-09-19,2000-09-20,2000-09-21,2000-09-22,2000-09-23,2000-09-24,2000-09-25,2000-09-26,2000-09-27,2000-09-28,2000-09-29,2000-09-30,2000-10-01,2000-10-02,2000-10-03,2000-10-04,2000-10-05,2000-10-06,2000-10-07,2000-10-08,2000-10-09,2000-10-10,2000-10-11,2000-10-12,2000-10-13,2000-10-14,2000-10-16,2000-10-17,2000-10-18,2000-10-19,2000-10-20,2000-10-21,2000-10-22,2000-10-23,2000-10-24,2000-10-25,2000-10-26,2000-10-27,2000-10-28,2000-10-29,2000-10-30,2000-11-01,2000-11-02,2000-11-03,2000-11-04,2000-11-05,2000-11-06,2000-11-07,2000-11-08,2000-11-09,2000-11-10,2000-11-11,2000-11-12,2000-11-13,2000-11-14,2000-11-15,2000-11-16,2000-11-17,2000-11-18,2000-11-19,2000-11-20,2000-11-21,2000-11-22,2000-11-23,2000-11-24,2000-11-25,2000-11-26,2000-11-27,2000-11-28,2000-11-29,2000-11-30,2000-12-01,2000-12-02,2000-12-03,2000-12-04,2000-12-05,2000-12-07,2000-12-08,2000-12-09,2000-12-10,2000-12-11,2000-12-12,2000-12-13,2000-12-15,2000-12-16,2000-12-17,2000-12-18,2000-12-19,2000-12-20,2000-12-21,2000-12-22,2000-12-23,2000-12-24,2000-12-25,2000-12-26,2000-12-27,2000-12-28,2000-12-29,2000-12-30,2000-12-31,2001-01-01,2001-01-02,2001-01-03,2001-01-05,2001-01-06,2001-01-07,2001-01-08,2001-01-09,2001-01-10,2001-01-11,2001-01-12,2001-01-13,2001-01-14,2001-01-15,2001-01-16,2001-01-17,2001-01-18,2001-01-19,2001-01-20,2001-01-21,2001-01-22,2001-01-23,2001-01-24,2001-01-25,2001-01-26,2001-01-27,2001-01-28,2001-01-29,2001-01-30,2001-01-31,2001-02-01,2001-02-02,2001-02-03,2001-02-04,2001-02-05,2001-02-06,2001-02-07,2001-02-08,2001-02-09,2001-02-10,2001-02-11,2001-02-12,2001-02-13,2001-02-14,2001-02-15,2001-02-16,2001-02-17,2001-02-18,2001-02-19,2001-02-20,2001-02-21,2001-02-22,2001-02-23,2001-02-24,2001-02-25,2001-02-26,2001-02-27,2001-02-28,2001-03-01,2001-03-02,2001-03-03,2001-03-04,2001-03-05,2001-03-06,2001-03-07,2001-03-08,2001-03-10,2001-03-11,2001-03-12,2001-03-13,2001-03-14,2001-03-15,2001-03-16,2001-03-17,2001-03-18,2001-03-19,2001-03-20,2001-03-21,2001-03-22,2001-03-24,2001-03-25,2001-03-26,2001-03-27,2001-03-28,2001-03-29,2001-03-30,2001-03-31,2001-04-01,2001-04-02,2001-04-03,2001-04-04,2001-04-05,2001-04-06,2001-04-07,2001-04-08,2001-04-09,2001-04-10,2001-04-11,2001-04-12,2001-04-13,2001-04-14,2001-04-15,2001-04-16,2001-04-17,2001-04-18,2001-04-19,2001-04-20,2001-04-21,2001-04-22,2001-04-23,2001-04-24,2001-04-25,2001-04-26,2001-04-27,2001-04-28,2001-04-29,2001-04-30,2001-05-01,2001-05-02,2001-05-03,2001-05-04,2001-05-05,2001-05-06,2001-05-07,2001-05-08,2001-05-09,2001-05-10,2001-05-11,2001-05-12,2001-05-13,2001-05-14,2001-05-15,2001-05-16,2001-05-17,2001-05-17,2001-05-17,2001-05-18,2001-05-19,2001-05-20,2001-05-21,2001-05-22,2001-05-23,2001-05-24,2001-05-25,2001-05-26,2001-05-27,2001-05-28,2001-05-29,2001-05-30,2001-05-31,2001-06-01,2001-06-02,2001-06-03,2001-06-04,2001-06-05,2001-06-07,2001-06-08,2001-06-09,2001-06-10,2001-06-11,2001-06-12,'.split(',');

var data1 = arr.map(function(value, index, array) {
    return parseInt(Math.random() * 100);
});

var data2 = arr.map(function(value, index, array) {
    return parseInt(Math.random() * 100);
});

/**
 * createLine two numbers.
 * @param {string} id The DOM id.
 * @param {object} option is teable seting and data.
 */
function createCharts(id, option) {
    // 基于准备好的dom，初始化echarts实例
    var myChart = echarts.init(document.getElementById(id));
    // 使用刚指定的配置项和数据显示图表。
    myChart.setOption(option);
};

    // 指定图表的配置项和数据
    var option1 = {
        title: {
            text: '365天demo',
        },
        tooltip: {
           trigger: 'axis',
        },
        legend: {
            data: ['销量', '销量2'],
        },
        xAxis: {
            // data: ["衬衫", "羊毛衫", "雪纺衫", "裤子", "高跟鞋", "袜子"],
            data: year,
            // type: 'value',
        },
        yAxis: {},
        dataZoom: [{
            startValue: year[0],
        }, {
            type: 'inside',
        }],
        series: [
            {
                name: '销量',
                type: 'line',
                data: data1,
            },
            {
                name: '销量2',
                type: 'line',
                data: data2,
            },
        ],
    };
     var option2 = {
        title: {
            text: '365天demo',
        },
        tooltip: {
           trigger: 'axis',
        },
        legend: {
            data: ['销量'],
        },
        xAxis: {
            // data: ["衬衫", "羊毛衫", "雪纺衫", "裤子", "高跟鞋", "袜子"],
            data: year,
            // type: 'value',
        },
        yAxis: {},
        dataZoom: [{
            startValue: year[year.length - 30],
        }, {
            type: 'inside',
        }],
        series: [
            {
                name: '销量',
                type: 'line',
                data: data1,
            },
        ],
    };
    // createLine('main1', option1);

/**
 * @param  {String} container
 */
function DataPlatform(container) {
    var self = this;
    var winLoad1 = {
        show: 'first',
    };
    this.container = container;
    this.vm = null;
    this.winLoad = winLoad1;
    this.tpl = {
        nav: '<ul class="nav">'
            + '<li class="list active">整体数据</li>'
            + '<li class="list">在期用户</li>'
            + '<li class="list">新增用户</li>'
            + '<li class="list">到期用户</li>'
            + '<li class="list">即将到期</li>'
            + '</ul>',
        section: '<div class="section"></div>',
        list: {
            0: function() {
                var str = '<header class="all-head">整体数据<span class="all-head-icon">?</span></header><div class="all"><div id="allLeftHistogram" class="all-left"></div><div class="all-right"><div class="all-right-list all-right-list-top"><p class="all-right-list-title">目前在期学院</p><p class="all-right-list-number">4506</p></div><div class="all-right-list all-right-list-center"><p class="all-right-list-title">昨日总新增用户</p><p class="all-right-list-number">2506</p></div><div class="all-right-list all-right-list-bottom"><p class="all-right-list-title">昨日新增付费用户</p><p class="all-right-list-number">1506</p></div></div></div>';
                return str;
            },
            1: function() {
                return 'dsdsds';
            },
            2: function() {
                var str = '<header class="all-head">新增数据<span class="all-head-icon">?</span></header><div id="newUserLine" class="newUser"></div>';
                return str;
            },
        },
    };
    this.css = {
        nav: '#container .nav{ margin: 0; padding: 0; list-style: none; } #container .nav .list { float: left; width: 120px; height: 40px; text-align: center; line-height: 40px; border: 1px solid #e5e5e5; cursor: pointer; } #container .nav .list:hover { border-bottom: none; border-top: 2px solid #e74c3c; color: #e74c3c; } #container .nav .active { border-bottom: none; border-top: 2px solid #e74c3c; color: #e74c3c;',
    };

};

DataPlatform.prototype = {
    container: DataPlatform,
    init: function() {
        console.log(this);
        console.log(this.winLoad.show);

        this.render();
        this.addEvent();
    },
    render: function() {
        this.addCss();
        var childNodeStr = this.mosaicStr(this.tpl);
        var containerDiv = document.getElementById(this.container);
        containerDiv.innerHTML = '' + childNodeStr;
        console.log(containerDiv);
        this.vm = containerDiv;
        this.labelChanges(0);
    },
    addEvent: function() {
        var self = this;
        // 标签切换
        var navList = this.vm.getElementsByClassName('nav')[0].getElementsByTagName('li');
        navList = Array.prototype.slice.call(navList);
        navList.forEach(function(value, index, array) {
            value.onclick = function() {
                var className = this.getAttribute('class');
                if(!className.match(new RegExp('active'))) {
                    array.map(function(value, index) {
                        value.setAttribute('class', value.getAttribute('class').replace('active', ' '));
                    });
                    this.setAttribute('class', this.getAttribute('class') + ' ' + 'active');
                    console.log(index);
                    self.labelChanges(index);
                };
                console.log(self);
            };
        });
        console.log(navList);
    },
    labelChanges: function(index) {
        this.vm.getElementsByClassName('section')[0].innerHTML = this.tpl.list[index]();
        if(typeof this.renderCharts[index] && this.renderCharts[index]) {
            this.renderCharts[index].call(this);
        }
    },
    addCss: function() {
        var cssString = this.mosaicStr(this.css);
        var style = document.createElement('style');

        style.setAttribute('type', 'text/css');
        if(style.styleSheet) { // IE
            style.styleSheet.cssText = cssString;
        } else { // w3c
            var cssText = document.createTextNode(cssString);
            style.appendChild(cssText);
        }
        var heads = document.getElementsByTagName('head');
        if(heads.length) {
            heads[0].appendChild(style);
        } else {
             doc.documentElement.appendChild(style);
        };
    },
    mosaicStr: function(object) {
        var str = '';
        for(var i in object) {
            if(object.hasOwnProperty(i) && (i in object) && i != 'list') {
                    str += object[i];
            }
        };
        return str;
    },
    createCharts: function(id, option) {
        // 基于准备好的dom，初始化echarts实例
        var myChart = echarts.init(document.getElementById(id));
        // 使用刚指定的配置项和数据显示图表。
        myChart.setOption(option);
    },
    renderCharts: {
        0: function() {
            this.createCharts('allLeftHistogram', {
                color: ['#3398DB'],
                tooltip: {
                    trigger: 'item',
                },
                grid: {
                    left: '3%',
                    right: '4%',
                    bottom: '3%',
                    containLabel: true,
                },
                xAxis: {
                    name: 'end',
                    type: 'category',
                    data: ['目前在期学员', '昨日总新增用户', '昨日新增付费用户'],
                    splitNumber: '10',
                    axisTick: {
                        alignWithLabel: true,
                    },
                    axisLabel: {
                        formatter: '{value}',
                    },
                },
                yAxis: [
                    {
                        type: 'value',
                        splitLine: {
                            show: true,
                            lineStyle: {
                                color: '#eeeeee',
                                type: 'dashed',
                        },
                    },
                    },
                ],
                series: {
                    type: 'bar',
                    data: [
                         {
                            name: '目前在期学员',
                            value: 5000,
                            itemStyle: {
                            normal: {
                                color: '#6cb6f5',
                                },
                            },
                        },
                         {
                        name: '昨日总新增用户',
                        value: 300,
                        itemStyle: {
                            normal: {
                                color: '#f7b547',
                                },
                            },
                        },
                        {
                        name: '昨日新增付费用户',
                        value: 450,
                        itemStyle: {
                            normal: {
                                color: '#f88a6f',
                                },
                            },
                        },
                    ],
                },
            });
        },
        1: function() {

        },
        2: function() {
            this.createCharts('newUserLine', {
                color: ['#3398DB'],
                tooltip: {
                    trigger: 'item',
                },
                grid: {
                    left: '3%',
                    right: '4%',
                    bottom: '3%',
                    containLabel: true,
                },
                xAxis: [
                    {
                        type: 'category',
                        data: ['目前在期学员', '昨日总新增用户', '昨日新增付费用户'],
                        axisTick: {
                            alignWithLabel: true,
                        },
                    },
                ],
                yAxis: [
                    {
                        type: 'value',
                    },
                ],
                series: {
                    type: 'bar',
                    data: [
                         {
                            name: '目前在期学员',
                            value: 5000,
                            itemStyle: {
                            normal: {
                                color: '#6cb6f5',
                                },
                            },
                        },
                         {
                        name: '昨日总新增用户',
                        value: 300,
                        itemStyle: {
                            normal: {
                                color: '#f7b547',
                                },
                            },
                        },
                        {
                        name: '昨日新增付费用户',
                        value: 450,
                        itemStyle: {
                            normal: {
                                color: '#f88a6f',
                                },
                            },
                        },
                    ],
                },
            });
        },
    },
};



new DataPlatform('container').init();
