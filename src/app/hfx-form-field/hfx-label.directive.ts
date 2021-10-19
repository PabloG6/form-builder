import { Directive } from '@angular/core';

@Directive({
  selector: 'label[hfxLabel]',
  host: {
    'class': 'hfx-form-label'
  }
})
export class HfxLabelDirective {

  constructor() { }

}
