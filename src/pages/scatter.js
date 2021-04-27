import React from 'react';
import ReactEcharts from 'echarts-for-react';
import data from './wine.json'
var a=[];
var b=[];
var d=[];
for (var i=0;i<data.data.length;i++)
{
          a.push(data.data[i].hue);
          b.push(data.data[i].color_intensity);
          var c=[data.data[i].color_intensity,data.data[i].hue];
          d.push(c);
}
console.log('d',d);
const ScatterPlot=()=>{
    return(
        <ReactEcharts
        option={{
            color: ["#e91e63 ", "#354EF6"],
            title: {
              subtext: "Data from the Wine Dataset",
              textAlign: "left",
              left: "0%"
            },
            tooltip: {borderWidth: 0, padding: 10},
            legend: {
              data: [],
              itemGap: 30,
              itemHeight: 15,
              right: "11%",
              top: 20
            },
            calculable: true,
            grid: {
              top: 100,
              bottom: 150,
              tooltip: {
                trigger: "axis",
                axisPointer: {
                  type: "shadow",
                  label: {
                    show: true,
                    formatter: function(params) {
                      return params.value.replace("\n", "");
                    }
                  }
                }
              }
            },
            xAxis: [
              {
                axisLabel: {
                //   interval: 0,
                //   rotate: 55,
                  textStyle: {
                    // baseline: "top",
                    // color: "#333",
                    fontSize: 10,
                    // fontWeight: "bold"
                  }
                },
                axisLine: { lineStyle: { color: "#aaa" }, show: true },
                axisTick: { show: false },
                data: b,
                name: "Color Intensity",
                splitLine: { show: false },
                type: "category"
              }
            ],
            yAxis: [
              {
                axisLabel: {
                  textStyle: { fontSize: 10 }
                },
                axisLine: { show: true },
                axisTick: { show: false },
                data: a,
                name: "Hue",
                splitLine: {
                  lineStyle: {
                    type: "dotted"
                  }
                },
                type: "value"
              }
            ],
    series: [{
        symbolSize: 10,
        data: d,
        type: 'scatter'
    }]
        }}
        style={{ height: "80vh", left: 50, top: 50, width: "95vw" }}
        opts={{ renderer: "svg" }}
      />
    )
}
export default ScatterPlot