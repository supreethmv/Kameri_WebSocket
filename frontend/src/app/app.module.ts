import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { Comp1Component } from './comp1/comp1.component';
import { Comp2Component } from './comp2/comp2.component';
import { NbThemeModule } from '@nebular/theme';
import { ChartsModule } from 'ng2-charts';
import { GraphComponent } from './graph/graph.component';
import { Graph2Component } from './graph2/graph2.component';
import { Graph3Component } from './graph3/graph3.component';

@NgModule({
  declarations: [
    AppComponent,
    Comp1Component,
    Comp2Component,
    GraphComponent,
    Graph2Component,
    Graph3Component
  ],
  imports: [
    BrowserModule,
    NbThemeModule.forRoot(),
    ChartsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
