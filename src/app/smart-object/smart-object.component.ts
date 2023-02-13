import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-smart-object',
  templateUrl: './smart-object.component.html',
  styleUrls: ['./smart-object.component.css']
})
export class SmartObjectComponent {
  @Input() title = '';
}
