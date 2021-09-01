import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatDividerModule } from '@angular/material/divider';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatRadioModule } from '@angular/material/radio';
import { MatSelectModule } from '@angular/material/select';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatTooltipModule } from '@angular/material/tooltip';
import {MatGridListModule} from '@angular/material/grid-list';
import { QuestionModule } from '../question/question.module';
import {MatTableModule} from '@angular/material/table';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatListModule} from '@angular/material/list';
import {MatStepper, MatStepperModule} from '@angular/material/stepper';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MatRadioModule,
    MatDatepickerModule,
    MatCardModule,
    MatDividerModule,
    MatSlideToggleModule,
    MatCheckboxModule,
    MatInputModule,
    MatToolbarModule,
    MatStepperModule,
    MatIconModule,
    QuestionModule,
    MatButtonModule,
    MatTableModule,
    MatTooltipModule,
    MatSidenavModule,
    MatSelectModule,
    MatListModule,
    MatGridListModule,
    MatFormFieldModule,
  ],
   exports: [
    MatRadioModule,
    MatStepperModule,
    MatDatepickerModule,
    MatCardModule,
    MatDividerModule,
    MatListModule,
    MatSlideToggleModule,
    MatSidenavModule,
    MatCheckboxModule,
    MatInputModule,
    MatToolbarModule,
    MatIconModule,
    MatGridListModule,
    QuestionModule,
    MatButtonModule,
    MatTooltipModule,
MatTableModule,
    MatSelectModule,
    MatFormFieldModule,
   ]
})
export class MatModule { }
