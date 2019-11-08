import { Component, OnInit } from '@angular/core';
import { WebSocketService } from '../web-socket.service';

@Component({
  selector: 'app-graph',
  templateUrl: './graph.component.html',
  styleUrls: ['./graph.component.css']
})
export class GraphComponent implements OnInit {


  constructor(private socket:WebSocketService) { }
  public barChartOptions = {
    scaleShowVerticalLines: false,
    responsive: true
  };
  public barChartLabels = ['Label 1', 'Label 2', 'Label 3', 'Label 4', 'Label 5', 'Label 6', 'Label 7', 'Label 8', 'Label 9', 'Label 10'];
  public barChartType = 'bar';
  public barChartLegend = true;
  public barChartData = [
    {data: [], label: 'Series A'}
  ];
  ngOnInit() {
    this.socket.cast.subscribe(data=>this.barChartData[0].data=data);
  }
}
