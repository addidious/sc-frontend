import * as Highcharts from 'highcharts';
import HC_exporting from 'highcharts/modules/exporting';
HC_exporting(Highcharts);

export const cardChartOptions : Highcharts.Options={
  chart: {
    type: 'area'
  },
  title: {
      text: undefined
  },
  credits:{
    enabled:false
  },
  exporting: {
    enabled:false,
  },
  tooltip: {
    outside:true,
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
    data:[71,78,39,66],
    type:'area'
  }],
}
