import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddQuestionComponent } from './add-question/add-question.component';
import { TextComponent } from './text/text.component';
import { RadioComponent } from './radio/radio.component';
import { QuestionDirective } from './question.directive';

import { ReactiveFormsModule } from '@angular/forms';

import { MatModule } from '../mat/mat.module';
import { MatInputWrapperComponent } from '../mat-input-wrapper/mat-input-wrapper.component';
import { RadioWrapperComponent } from '../radio-wrapper/radio-wrapper.component';
import { SelectWrapperComponent } from '../select-wrapper/select-wrapper.component';
import { CheckboxWrapperComponent } from '../checkbox-wrapper/checkbox-wrapper.component';
import { DateWrapperComponent } from '../date-wrapper/date-wrapper.component';



@NgModule({
  declarations: [
    AddQuestionComponent,
    TextComponent,
    RadioComponent,
    MatInputWrapperComponent,
    RadioWrapperComponent,
    QuestionDirective,
    SelectWrapperComponent,
    CheckboxWrapperComponent,
    DateWrapperComponent,

    
  ],
  exports: [
    QuestionDirective,
    AddQuestionComponent,
    MatInputWrapperComponent,
    RadioWrapperComponent,
    
  
  ],
  imports: [
    ReactiveFormsModule,
    CommonModule,
    MatModule,
  ]
})
export class QuestionModule { }
