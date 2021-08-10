import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddQuestionComponent } from './add-question/add-question.component';
import { TextComponent } from './text/text.component';
import { RadioComponent } from './radio/radio.component';
import { QuestionDirective } from './question.directive';
import { MatRadioModule } from '@angular/material/radio';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatCardModule } from '@angular/material/card';
import { MatDividerModule } from '@angular/material/divider';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { SelectWrapperComponent } from '../select-wrapper/select-wrapper.component';
import { MatInputWrapperComponent } from '../mat-input-wrapper/mat-input-wrapper.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';



@NgModule({
  declarations: [
    AddQuestionComponent,
    TextComponent,
    RadioComponent,
    
    QuestionDirective,

    
  ],
  exports: [
    QuestionDirective,
    AddQuestionComponent,
    
  
  ],
  imports: [
    CommonModule,
    MatRadioModule,
    MatDatepickerModule,
    MatIconModule,
    MatButtonModule,
    MatCardModule,
    MatDividerModule,
    ReactiveFormsModule,
    MatSlideToggleModule,
    MatCheckboxModule,
    MatInputModule,
    MatSelectModule,
    MatFormFieldModule,
  ]
})
export class QuestionModule { }
