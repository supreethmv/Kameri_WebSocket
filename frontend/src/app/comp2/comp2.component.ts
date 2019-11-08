import { Component, OnInit } from '@angular/core';
import { WebSocketService } from '../web-socket.service';

@Component({
  selector: 'app-comp2',
  templateUrl: './comp2.component.html',
  styleUrls: ['./comp2.component.css']
})
export class Comp2Component implements OnInit {

  constructor(private socket:WebSocketService) { }
  view_data:number[]=[];
  ngOnInit(){
    this.socket.cast.subscribe(data=>this.view_data=data);
  }

}
