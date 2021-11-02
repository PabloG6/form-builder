import { Component, ElementRef, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'button[hfx-button]',

  encapsulation: ViewEncapsulation.None,
  host: {
    'class': 'hfx-btn'
  },
  templateUrl: './hfx-button.component.html',
  styleUrls: ['./hfx-button.component.scss']
})
export class HfxButtonComponent implements OnInit {

  constructor(private _elementRef: ElementRef) { 
    (this._elementRef.nativeElement as HTMLElement).classList.add('btn');
    (this._elementRef.nativeElement as HTMLElement).classList.add('accent')

 
  }

  ngOnInit(): void {
  }

}
