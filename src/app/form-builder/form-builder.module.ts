import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilderComponent } from './form-builder.component';
import { FormBuilderRoutingModule } from './form-builder-routing.module';
import { CreateFormComponent } from '../create-form/create-form.component';
import { MatInputWrapperComponent } from '../mat-input-wrapper/mat-input-wrapper.component';
import { RadioWrapperComponent } from '../radio-wrapper/radio-wrapper.component';
import { SelectWrapperComponent } from '../select-wrapper/select-wrapper.component';
import { CheckboxWrapperComponent } from '../checkbox-wrapper/checkbox-wrapper.component';
import { DateWrapperComponent } from '../date-wrapper/date-wrapper.component';
import { FormDirective } from '../form.directive';
import {MatTooltipModule} from '@angular/material/tooltip';
import { MatRadioModule } from '@angular/material/radio';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatFormFieldModule } from '@angular/material/form-field';
import {MatCardModule} from '@angular/material/card';
import { FormComponent } from '../form/form.component';
import {MatDividerModule} from '@angular/material/divider';
import { ReactiveFormsModule } from '@angular/forms';
import {MatIconModule} from '@angular/material/icon';
import { MatToolbarModule } from "@angular/material/toolbar";
import {MatButton, MatButtonModule} from '@angular/material/button';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import { QuestionModule } from '../question/question.module';
import { MatModule } from '../mat/mat.module';
import { DashboardComponent } from '../dashboard/dashboard.component';



@NgModule({
  declarations: [
    FormBuilderComponent,
    CreateFormComponent,
    MatInputWrapperComponent,
    RadioWrapperComponent,
    FormDirective,
    
    SelectWrapperComponent,
    CheckboxWrapperComponent,
    DateWrapperComponent,
    FormComponent,
    DashboardComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatModule,
    FormBuilderRoutingModule
  ]
})
export class FormBuilderModule { }
