import { Component, Input, OnInit } from '@angular/core';
import { TextFieldInit } from '../types/form-field.type';

@Component({
  selector: 'app-date-wrapper',
  templateUrl: './date-wrapper.component.html',
  styleUrls: ['./date-wrapper.component.scss']
})
export class DateWrapperComponent implements OnInit, TextFieldInit {
  @Input() prompt: string;
  constructor() { }

  ngOnInit(): void {
  }

}
