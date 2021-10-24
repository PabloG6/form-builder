import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HfxFormFieldComponent } from '../hfx-form-field/hfx-form-field.component';
import { HfxInputDirective } from '../hfx-form-field/hfx-input.directive';
import { HfxHintComponent } from '../hfx-hint/hfx-hint.component';
import { HfxIconComponent } from '../hfx-icon/hfx-icon.component';
import { HfxFormFieldControl } from '../hfx-form-field/hfx-form-field-control';
import { HfxLabelDirective } from '../hfx-form-field/hfx-label.directive';
import { HfxFormFieldDirective } from '../hfx-form-field/hfx-form-field.directive';
import { HfxErrorComponent } from '../hfx-error/hfx-error.component';
import { ToolbarComponent } from '../toolbar/toolbar.component';



@NgModule({
  declarations: [
    HfxFormFieldComponent,
    HfxInputDirective,
    
    HfxHintComponent,
    HfxIconComponent,
    HfxLabelDirective,
    
    HfxFormFieldDirective,
         HfxErrorComponent,
         ToolbarComponent,
  ],
  imports: [
    CommonModule
  ], 
  exports: [
    HfxFormFieldComponent,
    HfxHintComponent,
    HfxErrorComponent,
    HfxInputDirective,
    HfxLabelDirective,
    HfxFormFieldDirective

  ]
})
export class HfxModule { }
