import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HfxFormFieldComponent } from '../hfx-form-field/hfx-form-field.component';
import { HfxInputDirective } from '../hfx-form-field/hfx-input.directive';
import { HfxHintComponent } from '../hfx-hint/hfx-hint.component';



@NgModule({
  declarations: [
    HfxFormFieldComponent,
    HfxInputDirective,
    HfxHintComponent,
  ],
  imports: [
    CommonModule
  ], 
  exports: [
    HfxFormFieldComponent,
    HfxInputDirective
  ]
})
export class HfxModule { }
