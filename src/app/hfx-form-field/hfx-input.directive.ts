import { ComponentFactoryResolver, Directive, ElementRef, forwardRef, HostBinding, HostListener, Optional, Self } from '@angular/core';
import { NgControl } from '@angular/forms';
import { Observable, Subject } from 'rxjs';
import { FORM_FIELD_TOKEN, HfxFormFieldControl } from './hfx-form-field-control';

@Directive({
  selector: 'input[hfxInput]',
  host: {
    'class': 'hfx-input-element',
  },
  
  
  
  providers: [{provide: FORM_FIELD_TOKEN, useExisting: HfxInputDirective}]
})
export class HfxInputDirective implements HfxFormFieldControl<any> {

  focused: boolean = false;

  stateChanges: Subject<void> = new Subject();
  constructor( @Optional() @Self() public ngControl: NgControl, protected elementRef: ElementRef) { 

    
  }
 
  get errorState(): boolean {


    return(this.ngControl?.control.invalid && (this.ngControl?.control.touched)) ?? false;
  }


  @HostListener('focus', ['true'])
  @HostListener('blur', ['false'])
  _onFocus(isFocused: boolean) {
  
    if(isFocused !== this.focused) {
      this.focused = isFocused;
      this.stateChanges.next();
    }

  }


  

  





}
