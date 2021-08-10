import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatInputModule} from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormDirective } from './form.directive';
import { MatInputWrapperComponent } from './mat-input-wrapper/mat-input-wrapper.component';
import {MatRadioModule} from '@angular/material/radio';
import { RadioWrapperComponent } from './radio-wrapper/radio-wrapper.component';
import { SelectWrapperComponent } from './select-wrapper/select-wrapper.component';
import {MatSelectModule} from '@angular/material/select';
import { CheckboxWrapperComponent } from './checkbox-wrapper/checkbox-wrapper.component';
import { DateWrapperComponent } from './date-wrapper/date-wrapper.component';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatCheckboxModule} from '@angular/material/checkbox';
@NgModule({
  declarations: [
    AppComponent,
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
