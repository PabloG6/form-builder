import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { ApiService } from '../api.service';
import { FormModel } from '../models/form.model';
import { TextFieldUnion } from '../types/form-field.type';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {

  
    
  $forms: Observable<FormModel>
  form: FormModel;
  
  constructor(private _apiService: ApiService, private _activatedRoute: ActivatedRoute) { 
    //do something about this
    console.log("hello world");
    const id = this._activatedRoute.snapshot.paramMap.get('id')
    this.$forms = this._apiService.getForm(id);
   
  }

  ngOnInit(): void {
  }

}
