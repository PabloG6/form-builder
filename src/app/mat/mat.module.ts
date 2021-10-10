import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material-experimental/mdc-button';
import { MatCardModule } from '@angular/material-experimental/mdc-card';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatDividerModule } from '@angular/material/divider';
import { MatFormFieldModule } from '@angular/material-experimental/mdc-form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material-experimental/mdc-input';
import { MatRadioModule } from '@angular/material-experimental/mdc-radio';
import { MatSelectModule } from '@angular/material-experimental/mdc-select';
import { MatSlideToggleModule } from '@angular/material-experimental/mdc-slide-toggle';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatTooltipModule } from '@angular/material/tooltip';
import {MatGridListModule} from '@angular/material/grid-list';
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

    MatButtonModule,
    MatTooltipModule,
MatTableModule,
    MatSelectModule,
    MatFormFieldModule,
   ]
})
export class MatModule { }
