import { Component, Input, OnInit } from '@angular/core';
import { TextFieldInit } from '../types/form-field.type';

@Component({
  selector: 'app-checkbox-wrapper',
  templateUrl: './checkbox-wrapper.component.html',
  styleUrls: ['./checkbox-wrapper.component.scss']
})
export class CheckboxWrapperComponent implements OnInit, TextFieldInit {
  @Input() choices!: any[];

  constructor() { }
  prompt: string;

  ngOnInit(): void {
  }

}
