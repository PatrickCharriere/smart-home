import { Component, Input } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-graph',
  templateUrl: './graph.component.html',
  styleUrls: ['./graph.component.css']
})
export class GraphComponent {
  @Input() title = '';
  serverUrl = 'http://124.150.75.142/temperature';

  constructor(private http: HttpClient) {
  }

  public graph = {
    data: [
        { x: ['2023-02-04 22:23:00'], y: [25], type: 'scatter', mode: 'lines+points', marker: {color: 'red'} },
    ],
    layout: {width: 800, height: 450, title: 'Temperatures'}
  };


  ngOnInit() {

    let request = this.http.get(this.serverUrl, {
      responseType: 'text'
    })

    request.subscribe(responseText => {
      console.log(responseText)
      
      let rawResponse = responseText.split('\r\n'), i = 0;
      let x = [], y = [];

      while(rawResponse[i]) {
        let parsedResponse: any = rawResponse[i].split('-')[0];
        let date = new Date((parsedResponse - 39600) * 1000);
        x.push(date.getFullYear() + '-' + ("0" + (date.getMonth() + 1)).slice(-2) + '-' + date.getDate() + ' ' + date.toLocaleTimeString());
        y.push(parseFloat(rawResponse[i].split('-')[1]))
        i++;
        
      }

      this.graph.data = [{
        x: x,
        y: y,
        type: 'scatter',
        mode: 'lines+points',
        marker: {color: 'rgb(127,12,90)'}
      }]
    })
    
  }
  
}
