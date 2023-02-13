import { Component } from '@angular/core';


export interface Reading {
  value: number,
  timestamp: number,
}

export interface Sensor {
  name: string,
  thresholds: {
    high: number,
    low: number,
  }
  readings: Reading[],
}

export interface Actuator {
  name: string,
}

export interface Object {
  name: string,
  address: string,
  sensors?: Sensor[],
  actuators?: Actuator[],
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = '205 Marlborough';

  objects: Object[] = [{
    name: 'Marine tank',
    address: "http://124.150.75.142"
  }]
  
}
