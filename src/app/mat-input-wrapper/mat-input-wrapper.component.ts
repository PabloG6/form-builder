import { Component, OnInit } from '@angular/core';
import { MatFormFieldAppearance } from '@angular/material/form-field';
import { TextFieldInit } from '../types/form-field.type';

@Component({
  selector: 'app-mat-input-wrapper',
  templateUrl: './mat-input-wrapper.component.html',
  styleUrls: ['./mat-input-wrapper.component.scss']
})
export class MatInputWrapperComponent implements OnInit, TextFieldInit {

  input: any;
  appearance: MatFormFieldAppearance;
  constructor() { }
  prompt: string;

  ngOnInit(): void {
  }

}
