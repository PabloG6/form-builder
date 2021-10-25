import { Content } from '@angular/compiler/src/render3/r3_ast';
import { AfterContentInit, ContentChild, Directive, ElementRef, Host, Inject, Optional, Self, ViewChild } from '@angular/core';
import { NgControl } from '@angular/forms';
import { HfxFormFieldControl } from './hfx-form-field-control';
import { FORM_CONTAINER, HfxFormFieldComponent } from './hfx-form-field.component';
import { HfxInputDirective } from './hfx-input.directive';

@Directive({
  selector: '[hfxFormField]',
  
  host: {
    'class': 'hfx-form-field',
    '[class.hfx-form-field__error]': 'errorState'
  }
})
export class HfxFormFieldDirective implements AfterContentInit {

  constructor(protected elementRef: ElementRef) { }

  ngAfterContentInit(): void {

  }



}
