import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'hfx-form-field',
  templateUrl: './hfx-form-field.component.html',
  styleUrls: ['./hfx-form-field.component.scss']
})
export class HfxFormFieldComponent implements OnInit {

  @Input() placeholder: string = " ";
  @Input() label: string = ""
  constructor() { }


  ngOnInit(): void {
  }

  onFocus(el: any) {
    console.log(el);
  }
}
