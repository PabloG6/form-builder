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
import { HfxIconButtonComponent } from '../hfx-icon-button/hfx-icon-button.component';
import { ListComponent } from '../list/list.component';
import { HfxButtonComponent } from '../hfx-button/hfx-button.component';
import { NbIconModule } from '@nebular/theme';



@NgModule({
  declarations: [
    HfxFormFieldComponent,
    HfxInputDirective,
    
    HfxHintComponent,
    HfxIconComponent,
    HfxLabelDirective,
    ListComponent,
    
    HfxFormFieldDirective,
         HfxErrorComponent,
         ToolbarComponent,
         HfxIconButtonComponent,
         ListComponent,
         HfxButtonComponent,
  ],
  imports: [
    CommonModule,
    NbIconModule,
  ], 
  exports: [
    HfxFormFieldComponent,
    HfxHintComponent,
    HfxErrorComponent,
    HfxButtonComponent,
    ListComponent,
    HfxInputDirective,
    HfxIconButtonComponent,
    HfxLabelDirective,
    HfxFormFieldDirective

  ]
})
export class HfxModule { }
