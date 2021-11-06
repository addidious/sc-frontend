import { Component, OnInit, ViewChild } from '@angular/core';
import { Chart } from 'angular-highcharts';
import { areaChartOptions } from '../shared/widgets/areaChartOptions';
import { cardChartOptions } from '../shared/widgets/cardChartOptions';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  areaChart=new Chart(areaChartOptions);
  cardChart=new Chart(cardChartOptions);

  // bigChart = [];
  // cards = [];
  // pieChart = [];

  // displayedColumns: string[] = ['position', 'name', 'weight', 'symbol'];
  // dataSource = new MatTableDataSource<PeriodicElement>(ELEMENT_DATA);

  // @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;

  constructor() { }

  ngOnInit(): void {
    // this.bigChart = this.dashboardService.bigChart();
    // this.cards = this.dashboardService.cards();
    // this.pieChart = this.dashboardService.pieChart();

    // this.dataSource.paginator = this.paginator;
    setTimeout(() => {
      window.dispatchEvent(
        new Event('resize')
      );
    }, 300);
  }

}
