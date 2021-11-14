import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { QuestionModel } from '../models/question.model';

@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.scss']
})
export class QuestionComponent implements OnInit {
  @Input()
  questions: QuestionModel[] = [];
  formGroup: FormGroup;
  constructor() { 

 
  
}
  ngOnInit(): void {
    const group: any = {};
    console.log(this.questions);
    
    this.questions.forEach(question => {
      console.log(question.question_type)
      group[question.question_id] = question.required ? new FormControl(question.value || '', Validators.required)
                                              : new FormControl(question.value || '');
    }
    )
    this.formGroup = new FormGroup(group)
  }



}
