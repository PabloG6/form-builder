import { Component, Input, OnInit } from '@angular/core';
import { MatFormFieldAppearance } from '@angular/material/form-field';
import { TextFieldInit } from '../types/form-field.type';

@Component({
  selector: 'app-select-wrapper',
  templateUrl: './select-wrapper.component.html',
  styleUrls: ['./select-wrapper.component.scss']
})
export class SelectWrapperComponent implements OnInit, TextFieldInit {

  @Input() options!: any[]
  @Input() appearance: MatFormFieldAppearance;
  constructor() { }
  prompt: string;

  ngOnInit(): void {
    console.log(this.options);
    
  }

}
