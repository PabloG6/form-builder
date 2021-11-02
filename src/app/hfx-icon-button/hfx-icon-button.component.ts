import { Component, ElementRef, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'button[hfx-icon-button]',
  templateUrl: './hfx-icon-button.component.html',
  styleUrls: ['./hfx-icon-button.component.scss'],
  encapsulation: ViewEncapsulation.None,
 
})
export class HfxIconButtonComponent implements OnInit {

  constructor(private elementRef: ElementRef) { 

  }

  ngOnInit(): void {
    (this._getHostElement() as HTMLElement).classList.add('icon-btn');
    (this._getHostElement() as HTMLElement).classList.add('btn')

  }


  private _getHostElement() {
    return this.elementRef.nativeElement;
  }

}


