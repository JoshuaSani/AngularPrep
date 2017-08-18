import { Component, OnInit, Input, Output, EventEmitter  } from '@angular/core';
import { Card } from '../gameobjects/card';

@Component({
  selector: 'app-field',
  templateUrl: './field.component.html',
  styleUrls: ['./field.component.css']
})
export class FieldComponent implements OnInit {

  @Input()
  playersCards: Card[][] = [];

  constructor() { }

  ngOnInit() {
  }

}
