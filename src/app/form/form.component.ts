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
      type: "text",
      prompt: 'What is your name?',
      appearance: "fill",
      
    },
    {
      type: "text",
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
  constructor() { }

  ngOnInit(): void {
  }

}
