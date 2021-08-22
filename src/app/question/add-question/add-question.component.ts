import { AfterViewInit, ChangeDetectorRef, Component, ComponentRef, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Subject } from 'rxjs';
import { QuestionDirective } from '../question.directive';
import {v4 as uuidv4} from 'uuid';
import { RadioComponent } from '../radio/radio.component';
import { TextComponent } from '../text/text.component';

@Component({
  selector: 'app-add-question',
  templateUrl: './add-question.component.html',
  styleUrls: ['./add-question.component.scss']
})
export class AddQuestionComponent implements OnInit, AfterViewInit {

  output: Subject<any> = new Subject<any>();
  @Output() onDelete = new EventEmitter<any>()
  id: string;
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

  private _currentDirective: any;
  private component: ComponentRef<RadioComponent | TextComponent>
  constructor(private _fb: FormBuilder, public _cdr: ChangeDetectorRef) { 
    this.id = uuidv4();
    this.formGroup = _fb.group({
      prompt: ['', Validators.required],
      type: ['text', Validators.required],
      required: [false]
    })

  }
  ngAfterViewInit(): void {
    this.component = this.questionDirective.setQuestion('text');
    this._cdr.detectChanges();

  }

  ngOnInit(): void {
    
  }


  get currentDirective(): any {
    return this._currentDirective;
  }
  onSelectionChange(value: 'radio' | 'select' | 'text' | 'date') {
    
   
    this.component = this.questionDirective.setQuestion(value)

  }


  get value() {
    if(this.component.instance instanceof RadioComponent) {
      
      return {...this.formGroup.value, values: this.component.instance.values}

    }

    return {...this.formGroup.value}
  }

  deleteQuestion() {
    console.log("hello world");
    this.onDelete.emit(this);
    this.output.next("hello");
    
  }
  onSubmit() {

    
    console.log(this.formGroup.value);
  }

  get formQuestion() {
    return this.formGroup.value;
  }

}
