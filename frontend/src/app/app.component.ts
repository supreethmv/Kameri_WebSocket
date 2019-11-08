import { Component, OnInit } from '@angular/core';
import { WebSocketService } from './web-socket.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  constructor(private socket:WebSocketService){}
  view_data:number[]=[];

  ngOnInit(){
    this.socket.cast.subscribe(data=>this.view_data=data);
  }

}
