import { Component, Input } from '@angular/core';
import { Object } from '../app.component';

@Component({
  selector: 'app-smart-object',
  templateUrl: './smart-object.component.html',
  styleUrls: ['./smart-object.component.css']
})
export class SmartObjectComponent {
  @Input() data: Object = {
    name: '',
    address: ''
  };

}
