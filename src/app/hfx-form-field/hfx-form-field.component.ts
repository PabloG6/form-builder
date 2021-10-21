import { AfterContentChecked, AfterContentInit, AfterViewInit, ChangeDetectionStrategy, Component, ContentChild, Host, HostBinding, HostListener, InjectionToken, Input, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';
import { hfxFormFieldAnimations } from './hfx-form-field-animations';
import { FORM_FIELD_TOKEN, HfxFormFieldControl } from './hfx-form-field-control';
import { HfxInputDirective } from './hfx-input.directive';

export const FORM_CONTAINER = new InjectionToken<HfxFormFieldComponent>("FORM_CONTAINER")

@Component({
  selector: 'hfx-form-field',
  templateUrl: './hfx-form-field.component.html',
  styleUrls: ['./hfx-form-field.component.scss'],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    
    'class': 'hfx-form-field',
    '[class.hfx-form-field--active]': '!_control.errorState && _control.focused',
    '[class.hfx-form-field--invalid]': '_control.errorState',
    '[class.hfx-form-field--focused]': '_control.focused',
   
  },
  animations: [hfxFormFieldAnimations.transitionMessages],
  providers: [{provide: FORM_CONTAINER, useExisting: HfxFormFieldComponent}]

})
export class HfxFormFieldComponent implements OnInit, AfterViewInit, AfterContentInit, AfterContentChecked {
  

  @Input() label: string;

  @ContentChild(FORM_FIELD_TOKEN, {static: true}) formFieldControl: HfxFormFieldControl<any>;
  

  get _control(): HfxFormFieldControl<any> {
    return this.formFieldControl
  }
  constructor() { }
  ngAfterContentChecked(): void {
  }
  ngAfterContentInit(): void {
    console.log("hello world", this.formFieldControl);
  }
  ngAfterViewInit(): void {
  }


  ngOnInit(): void {
  }


 
  


  
}
