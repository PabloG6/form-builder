import { ChangeDetectorRef, Component, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Subject } from 'rxjs';
import { QuestionDirective } from '../question.directive';

@Component({
  selector: 'app-add-question',
  templateUrl: './add-question.component.html',
  styleUrls: ['./add-question.component.scss']
})
export class AddQuestionComponent implements OnInit {

  output: Subject<any> = new Subject<any>();
  @Output() onDelete = new EventEmitter<any>()
  formGroup: FormGroup;
  options = [{
    name: 'text',
    description: 'Text',
  }, {
    name: 'radio', 
    description: 'Radio',

  },
    {
      name: 'dropdown',
      description: 'Dropdown',
    },

    {
      name: 'date',
      description: 'Date'
    }
  ]

  @ViewChild(QuestionDirective, {static: true}) questionDirective!: QuestionDirective

  constructor(private _fb: FormBuilder, public _cdr: ChangeDetectorRef) { 
    this.formGroup = _fb.group({
      questionPrompt: ['', Validators.required],
      questionType: ['text', Validators.required],
      required: [null]
    })
  }

  ngOnInit(): void {
    
  }


  onSelectionChange(value: 'radio' | 'select' | 'text' | 'date') {
    
    this.questionDirective.setQuestion(value)

  }


  deleteQuestion() {
    console.log("helloo world");
    this.onDelete.emit(this);
    this.output.next("hello");
    
  }
  onSubmit() {
    console.log(this.formGroup.value);
  }

}
