import * as Highcharts from 'highcharts';
import HC_exporting from 'highcharts/modules/exporting';
HC_exporting(Highcharts);

export const areaChartOptions : Highcharts.Options={
  chart: {
    type: 'area'
  },
  title: {
      text: 'Demand forecast for Renewable Energy'
  },
  credits:{
    enabled:false
  },
  exporting: {
    enabled:true,
  },
  xAxis: {
      categories: ['1750', '1800', '1850', '1900', '1950', '1999', '2050'],
      tickmarkPlacement: 'on',
  },
  yAxis: {
      title: {
          text: 'Billions'
      },
  },
  tooltip: {
      split: true,
      valueSuffix: ' millions'
  },
  plotOptions: {
      area: {
          stacking: 'normal',
          lineColor: '#666666',
          lineWidth: 1,
          marker: {
              lineWidth: 1,
              lineColor: '#666666'
          }
      }
  },
  series: [{
      name: 'Asia',
      type: 'area',
      data: [502, 635, 809, 947, 1402, 3634, 5268]
  }, {
      name: 'Africa',
      type: 'area',
      data: [106, 107, 111, 133, 221, 767, 1766]
  }, {
      name: 'Europe',
      type: 'area',
      data: [163, 203, 276, 408, 547, 729, 628]
  }, {
      name: 'America',
      type: 'area',
      data: [18, 31, 54, 156, 339, 818, 1201]
  }, {
      name: 'Oceania',
      type: 'area',
      data: [2, 2, 2, 6, 13, 30, 46]
  }],
}
