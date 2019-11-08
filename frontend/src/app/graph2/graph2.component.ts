import { Component, OnInit } from '@angular/core';
import { WebSocketService } from '../web-socket.service';

@Component({
  selector: 'app-graph2',
  templateUrl: './graph2.component.html',
  styleUrls: ['./graph2.component.css']
})
export class Graph2Component implements OnInit {

  public doughnutChartLabels = ['Label 1', 'Label 2', 'Label 3', 'Label 4', 'Label 5', 'Label 6', 'Label 7', 'Label 8', 'Label 9', 'Label 10'];
  public doughnutChartData = [120, 150, 180, 90];
  public doughnutChartType = 'doughnut';
  constructor(private socket:WebSocketService) { }
  ngOnInit() {
    this.socket.cast.subscribe(data=>this.doughnutChartData=data);
  }

}
