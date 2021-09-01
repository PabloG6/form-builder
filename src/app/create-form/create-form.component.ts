import { isGeneratedFile } from '@angular/compiler/src/aot/util';
import { AfterViewInit, Component, ComponentFactoryResolver, ComponentRef, ElementRef, OnDestroy, OnInit, TemplateRef, ViewChild, ViewContainerRef } from '@angular/core';
import { Form, FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { SubSink } from 'subsink';
import { ApiService } from '../api.service';
import { AddQuestionComponent } from '../question/add-question/add-question.component';
import { QuestionDirective } from '../question/question.directive';
import { RadioComponent } from '../question/radio/radio.component';

@Component({
  selector: 'app-create-form',
  templateUrl: './create-form.component.html',
  styleUrls: ['./create-form.component.scss']
})
export class CreateFormComponent implements OnInit, OnDestroy {

  formGroup: FormGroup
  subsink: SubSink = new SubSink();
  @ViewChild('questionContainer', {static: true, read: ViewContainerRef}) questionContainerRef: ViewContainerRef;
  
  questionsComponentArray: ComponentRef<AddQuestionComponent>[] = [];
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

  constructor(private _fb: FormBuilder, private _viewContainerRef: ViewContainerRef, 
    private _factoryResolver: ComponentFactoryResolver, private _apiService: ApiService) { 
    this.formGroup = this._fb.group({
      formInfo: this._fb.group({
        title: ['', [Validators.required]],
        description: ['', [Validators.required]],
        webhook: ['', [Validators.required]]
      }),
      questions: new FormArray([])
    })
   

    
  }
  
  
  ngOnDestroy(): void {
    this.subsink.unsubscribe();
  }
  

  ngOnInit(): void {
    this.addQuestionComponent();

  }




  
  onSubmit() {
    const questionsFormArray:any[]= [];
    console.log(this.questionsComponentArray);
    console.log(this.formGroup);
    
  

    console.log(questionsFormArray)
    this._apiService.submitForm({...this.formGroup.value.formInfo, questions: this.formGroup.value.questions}).subscribe((response: any) => {
      console.log('form created', response);
    })


  }
  
  
  addQuestionComponent() {
  
    const componentFactory = this._factoryResolver.resolveComponentFactory(AddQuestionComponent);
    const component = this.questionContainerRef.createComponent(componentFactory);
    this.questionsFormArray.push(component.instance.formGroup);
    console.log(this.questionsFormArray);
    this.subsink.sink = component.instance.onDelete.subscribe((instance) => {
      const component = this.questionsComponentArray.find(component => component.instance === instance);
      this.questionsComponentArray = this.questionsComponentArray.filter(component => component.instance !== instance)
      const index = this.questionContainerRef.indexOf(component.hostView);

      
      
      
      console.log(component.instance);
      this.questionContainerRef.detach(index);
      console.log(this.questionsComponentArray);
      console.log(this.questionsFormArray);
      this.questionsFormArray.removeAt(index, {emitEvent: true});
     console.log(this.questionsFormArray);


    }, () => {
    })

    
  
    this.questionsComponentArray.push(component);
  
  }


  get questionsFormArray(): FormArray {
    console.log('formGroup: ', this.formGroup);
    return this.formGroup.get('questions') as FormArray;
  }

  get formInfo(): FormGroup {
    return this.formGroup.get('formInfo') as FormGroup;
  }
 
  changeQuestion($event: any, index: number) {
    const questionComponent = this.questionsComponentArray[index];
    
    
  }


  

}
