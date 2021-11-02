import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { FormBuilderComponent } from './form-builder.component';
import { FormComponent } from '../form/form.component';
import { DashboardComponent } from '../dashboard/dashboard.component';


const routes: Routes = [

  {
    path: 'dashboard',
    component: DashboardComponent
  },
  {
    path: ':id',
    component: FormComponent
  },
  
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
