import { Component, OnInit } from '@angular/core';
import { WebSocketService } from '../web-socket.service';

@Component({
  selector: 'app-graph3',
  templateUrl: './graph3.component.html',
  styleUrls: ['./graph3.component.css']
})
export class Graph3Component implements OnInit {
  public pieChartLabels = ['Label 1', 'Label 2', 'Label 3', 'Label 4', 'Label 5', 'Label 6', 'Label 7', 'Label 8', 'Label 9', 'Label 10'];
  public pieChartData = [];
  public pieChartType = 'pie';
  public data=[
    {
        value: 300,
        color:"#F7464A",
        highlight: "#FF5A5E",
        label: "Red"
    },
    {
        value: 50,
        color: "#46BFBD",
        highlight: "#5AD3D1",
        label: "Green"
    },
    {
        value: 100,
        color: "#FDB45C",
        highlight: "#FFC870",
        label: "Yellow"
    }
];
  constructor(private socket:WebSocketService) { }
  ngOnInit() {
    this.socket.cast.subscribe(data=>this.pieChartData=data);
  }
}
