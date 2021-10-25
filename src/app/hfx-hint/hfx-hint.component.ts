import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'hfx-hint',
  templateUrl: './hfx-hint.component.html',
  styleUrls: ['./hfx-hint.component.scss'],
  encapsulation: ViewEncapsulation.None,
  host: {
    'class': 'hfx-hint'
  }
})
export class HfxHintComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
