import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilderComponent } from './form-builder.component';
import { FormBuilderRoutingModule } from './form-builder-routing.module';

import { FormDirective } from '../form.directive';
import {ClipboardModule} from '@angular/cdk/clipboard';

import { FormComponent } from '../form/form.component';
import { ReactiveFormsModule } from '@angular/forms';

import { MatModule } from '../mat/mat.module';
import { DashboardComponent } from '../dashboard/dashboard.component';
import { NbIconModule, NbUserModule } from '@nebular/theme';
import { HfxModule } from '../hfx/hfx.module';
import { FormListComponent } from '../form-list/form-list.component';
import { QuestionComponent } from '../question/question.component';



@NgModule({
  declarations: [
    FormBuilderComponent,
    
    FormDirective,
    QuestionComponent,
   
    FormComponent,
    DashboardComponent,
    FormListComponent,
    
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatModule,
    ClipboardModule,
    NbUserModule,
    NbIconModule,
    HfxModule,
    FormBuilderRoutingModule,
    
  ]
})
export class FormBuilderModule { }
