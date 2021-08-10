import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { FormBuilderComponent } from './form-builder.component';
import { CreateFormComponent } from '../create-form/create-form.component';


const routes: Routes = [
  
  {
    path: 'create',
    component: CreateFormComponent,
  }
]

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forChild(routes),
    CommonModule
  ]
  ,exports: [
    RouterModule
  ]
})
export class FormBuilderRoutingModule { }