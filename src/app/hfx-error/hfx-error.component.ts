import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'hfx-error',
  templateUrl: './hfx-error.component.html',
  styleUrls: ['./hfx-error.component.scss'],
  encapsulation: ViewEncapsulation.None,
  host: {
    'class': 'hfx-error'
  }
})
export class HfxErrorComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
