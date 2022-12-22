import React from 'react';
import ReactECharts from 'echarts-for-react';

const SampleEchart =  () => {
  const option = {
    title: {
      text: 'Sample Text'
    },
    tooltip : {
      trigger: 'axis'
    },
    legend: {
      data:['Sample Text','Sample Text','Sample Text']
    },
    toolbox: {
      feature: {
        saveAsImage: {}
      }
    },
    grid: {
      left: '3%',
      right: '4%',
      bottom: '3%',
      containLabel: true
    },
    xAxis : [
      {
        type : 'category',
        boundaryGap : false,
        data : ['Sample Text','Sample Text','Sample Text','Sample Text','Sample Text','Sample Text','Sample Text']
      }
    ],
    yAxis : [
      {
        type : 'value'
      }
    ],
    series : [
      {
        name:'Sample Text',
        type:'line',
        stack: '总量',
        areaStyle: {normal: {}},
        data:[120, 132, 101, 134, 90, 230, 210]
      },
      {
        name:'Sample Text',
        type:'line',
        stack: '总量',
        areaStyle: {normal: {}},
        data:[220, 182, 191, 234, 290, 330, 310]
      },
      {
        name:'Sample Text',
        type:'line',
        stack: '总量',
        areaStyle: {normal: {}},
        data:[150, 232, 201, 154, 190, 330, 410]
      }
    ]
  };

  return <ReactECharts
    option={option}
    style={{ height: 400 }}
  />;
};

export default SampleEchart;