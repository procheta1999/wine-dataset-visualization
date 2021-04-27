import React from 'react';
import ReactEcharts from 'echarts-for-react';
import data from './wine.json'
var c=[];
var a=0;
var b=[];
var d=[];
var num= data.data.length;
for (var i=0;i<data.data.length;i++)
{
    c.push(data.data[i].malic_acid);
          a=a+parseFloat(data.data[i].malic_acid);
          b.push(data.data[i].alcohol);
}
var avg= a/num;
console.log('avg',avg);
const BarPlot=()=>{
    return(
        <ReactEcharts
        option={{
            color: ["#e91e63 ", "#354EF6"],
            title: {
            //   subtext: "Data from the Wine Dataset",
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
                name: "Alcohol",
                data:b,
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
                data: c,
                name: "Malic Acid",
                splitLine: {
                  lineStyle: {
                    type: "dotted"
                  }
                },
                type: "value"
              }
            ],
            series: [{
                data: [avg],
                type: 'bar'
            }]
        }}
        style={{ height: "80vh", left: 50, top: 120, width: "95vw" }}
        opts={{ renderer: "svg" }}
      />
    )
}
export default BarPlot