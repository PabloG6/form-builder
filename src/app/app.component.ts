import { Platform } from '@angular/cdk/platform';
import { ComponentFactoryResolver, OnInit, ViewChild } from '@angular/core';
import { Component } from '@angular/core';
import { FormControl, NgControl } from '@angular/forms';
import { MatFormField, MatFormFieldControl, MatFormFieldModule } from '@angular/material/form-field';
import { MatInput } from '@angular/material/input';
import { Observable, of } from 'rxjs';
import { FormDirective } from './form.directive';
import { MatInputWrapperComponent } from './mat-input-wrapper/mat-input-wrapper.component';
import { TextFieldUnion } from './types/form-field.type';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
    
  
  constructor(private componentFactoryResolver: ComponentFactoryResolver) {
    
    

  }
  ngOnInit(): void {
    
    
}

  
}


