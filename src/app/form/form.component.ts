import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from '../api.service';
import { TextFieldUnion } from '../types/form-field.type';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {

  inputs: TextFieldUnion[] = [
    {
      type: "shortAnswer",
      prompt: 'What is your name?',
      appearance: "fill",
      
    },
    {
      type: "shortAnswer",
      prompt: 'Where are you from?',
      appearance: "outline"
    },
    {
      type: 'radio',
      prompt: 'How would you like to be greeted?',
      appearance: 'outline',
      choices: [
        'Hello', 
        'Konichiwa',
        'Привет',
        'Hola'
      ]
    },
    {
      type: 'select',
      prompt: 'What meat do u want?',
      appearance: 'outline',
      options: [
        "chicken",
        "fish",
        "beef"
      ]
    },
    {
      prompt: 'What fruit do u want?',
      type: 'checkbox',
      choices: ['orange', 'banana', 'apple']
    }
    
  ]
  constructor(private _apiService: ApiService, private _activatedRoute: ActivatedRoute) { 
    //do something about this
    console.log("hello world");
    const id = this._activatedRoute.snapshot.paramMap.get('id')
    this._apiService.getForm('a6321f78-8f63-46f7-a53b-3d2aa066ae6b').subscribe((response) => {
      console.log(response);
    })
  }

  ngOnInit(): void {
  }

}
