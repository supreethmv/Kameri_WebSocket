import { Component, OnInit } from '@angular/core';
import { WebSocketService } from '../web-socket.service';

@Component({
  selector: 'app-comp1',
  templateUrl: './comp1.component.html',
  styleUrls: ['./comp1.component.css']
})
export class Comp1Component implements OnInit {

  constructor(private socket:WebSocketService) { }
  view_data:number[]=[];
  ngOnInit(){
    this.socket.cast.subscribe(data=>this.view_data=data);
  }

}
