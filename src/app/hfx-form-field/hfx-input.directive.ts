import { Directive } from '@angular/core';

@Directive({
  selector: 'input[hfxInput]',
  host: {
    'class': 'hfx-input-element',
  }
})
export class HfxInputDirective {

  constructor() { }

}
