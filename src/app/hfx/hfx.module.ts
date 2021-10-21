import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HfxFormFieldComponent } from '../hfx-form-field/hfx-form-field.component';
import { HfxInputDirective } from '../hfx-form-field/hfx-input.directive';
import { HfxHintComponent } from '../hfx-hint/hfx-hint.component';
import { HfxIconComponent } from '../hfx-icon/hfx-icon.component';
import { HfxFormFieldControl } from '../hfx-form-field/hfx-form-field-control';
import { HfxLabelDirective } from '../hfx-form-field/hfx-label.directive';
import { HfxFormFieldDirective } from '../hfx-form-field/hfx-form-field.directive';



@NgModule({
  declarations: [
    HfxFormFieldComponent,
    HfxInputDirective,
    
    HfxHintComponent,
    HfxIconComponent,
    HfxLabelDirective,
    
    HfxFormFieldDirective,
  ],
  imports: [
    CommonModule
  ], 
  exports: [
    HfxFormFieldComponent,
    HfxHintComponent,
    HfxInputDirective,
    HfxLabelDirective,
    HfxFormFieldDirective

  ]
})
export class HfxModule { }
