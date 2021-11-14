import { Component, InjectionToken, OnInit, ViewEncapsulation } from '@angular/core';
import { MAT_ERROR } from '@angular/material-experimental/mdc-form-field';

export const HFX_ERROR = new InjectionToken<HfxErrorComponent>('MatError');

@Component({
  selector: 'hfx-error',
  templateUrl: './hfx-error.component.html',
  styleUrls: ['./hfx-error.component.scss'],
  encapsulation: ViewEncapsulation.None,
  providers: [{provide: HFX_ERROR, useExisting:HfxErrorComponent}],
  host: {
    'class': 'hfx-error'
  }
})
export class HfxErrorComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
