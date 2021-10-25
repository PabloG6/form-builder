import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'hfx-icon',
  template: `
    <ng-content></ng-content>
  `,

  host: {
    'class': 'hfx-form-field__icon hfx-icon',

  },
  styleUrls: ['./hfx-icon.component.scss']
})
export class HfxIconComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
