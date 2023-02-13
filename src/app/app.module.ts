import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GraphComponent } from './graph/graph.component';
import { SmartObjectComponent } from './smart-object/smart-object.component';

import * as PlotlyJS from 'plotly.js-dist-min';
import { PlotlyModule } from 'angular-plotly.js';
import { RouterModule, Routes } from '@angular/router';

PlotlyModule.plotlyjs = PlotlyJS;

const routes: Routes = [
  { path: 'smart-objects', component: SmartObjectComponent },
  { path: 'settings', component: SmartObjectComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    GraphComponent,
    SmartObjectComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    PlotlyModule,
    RouterModule.forRoot(routes),
  ],
  exports: [RouterModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
