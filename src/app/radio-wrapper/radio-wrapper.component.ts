import { Component, Input, OnInit } from '@angular/core';
import { TextFieldInit } from '../types/form-field.type';

@Component({
  selector: 'app-radio-wrapper',
  templateUrl: './radio-wrapper.component.html',
  styleUrls: ['./radio-wrapper.component.scss']
})
export class RadioWrapperComponent implements OnInit, TextFieldInit {

  constructor() { }
  prompt: string;

  @Input() choices: string[];
  
  ngOnInit(): void {
  }

}
