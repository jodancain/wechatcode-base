import * as echarts from './echarts-for-weixin/echarts';

const API_HOST = 'http://localhost:3000';
let chart = null;

function initChart(canvas, width, height, dpr) {
  chart = echarts.init(canvas, null, {
    width: width,
    height: height,
    devicePixelRatio: dpr
  });
  canvas.setChart(chart);
  return chart;
}

Page({
  data: {
    ec: {
      onInit: initChart
    },
    patientId: null,
  },

  onLoad(options) {
    const app = getApp();
    if (app.globalData.patientInfo) {
      this.setData({
        patientId: app.globalData.patientInfo.id,
      });
      this.fetchMetricData();
    } else {
      wx.redirectTo({
        url: '/pages/index/index',
      });
    }
  },

  fetchMetricData() {
    console.log("Fetching MOCK metric data for the chart...");

    // --- MOCKING BACKEND RESPONSE ---
    const mockMetrics = [
      { recordedAt: '2025-11-01T10:00:00Z', value: 450, type: 'uric_acid' },
      { recordedAt: '2025-11-02T11:00:00Z', value: 410, type: 'uric_acid' },
      { recordedAt: '2025-11-03T12:00:00Z', value: 380, type: 'uric_acid' },
      { recordedAt: '2025-11-04T13:00:00Z', value: 510, type: 'uric_acid' },
      { recordedAt: '2025-11-05T14:00:00Z', value: 480, type: 'uric_acid' },
    ];

    const dates = mockMetrics.map(m => new Date(m.recordedAt).toLocaleDateString());
    const values = mockMetrics.map(m => m.value);

    // Use a setTimeout to ensure the chart component is ready
    setTimeout(() => {
      if (chart) {
        chart.setOption(this.getChartOption(dates, values));
      } else {
        console.error("Chart instance not ready.");
      }
    }, 500);
    // --- END MOCKING ---
    
    /*
    // Original backend request code is commented out
    wx.request({
      // ...
    });
    */
  },

  getChartOption(dates, values) {
    return {
      tooltip: {
        trigger: 'axis'
      },
      grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true
      },
      xAxis: {
        type: 'category',
        boundaryGap: false,
        data: dates
      },
      yAxis: {
        type: 'value',
        axisLabel: {
          formatter: '{value} μmol/L'
        }
      },
      series: [
        {
          name: '血尿酸',
          type: 'line',
          data: values,
          markLine: {
            silent: true,
            data: [{
              yAxis: 420,
              lineStyle: {
                color: '#E74C3C'
              },
              label: {
                formatter: '高危线 (420)'
              }
            }]
          }
        }
      ]
    };
  },
  
  onUnload() {
    chart = null;
  }
});
