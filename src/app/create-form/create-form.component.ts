import { isGeneratedFile } from '@angular/compiler/src/aot/util';
import { AfterViewInit, Component, ComponentFactoryResolver, ComponentRef, OnDestroy, OnInit, TemplateRef, ViewChild, ViewContainerRef } from '@angular/core';
import { Form, FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { SubSink } from 'subsink';
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

  constructor(private _fb: FormBuilder, private _viewContainerRef: ViewContainerRef, private _factoryResolver: ComponentFactoryResolver) { 
    this.formGroup = this._fb.group({
      formTitle: ['', Validators.required],
      questions: new FormArray([])
    })
   

    
  }
  ngOnDestroy(): void {
    this.subsink.unsubscribe();
  }
  

  ngOnInit(): void {
   
  }



  onSelectionChange(value: 'radio' | 'select' | 'text' | 'date') {
    
  }
  onSubmit() {
    console.log(this.questionsComponentArray);
    this.questionsComponentArray.forEach(componentRef => {
       const value =  componentRef.instance.value;
       console.log(value);
       
    
    })
  }
  
  
  addQuestionComponent() {
  
    const componentFactory = this._factoryResolver.resolveComponentFactory(AddQuestionComponent);
    const component = this._viewContainerRef.createComponent(componentFactory);

    this.subsink.sink = component.instance.onDelete.subscribe((instance) => {
      const component = this.questionsComponentArray.find(component => component.instance === instance);
      this.questionsComponentArray = this.questionsComponentArray.filter(component => component.instance !== instance)
      const index = this._viewContainerRef.indexOf(component.hostView);

      
      console.log(component.instance);
      this._viewContainerRef.detach(index);
      console.log(this.questionsComponentArray);
      console.log(this.questionsFormArray);
      this.questionsFormArray.removeAt(index);


    }, () => {
    })

    
  
    this.questionsComponentArray.push(component);
  
  }


  get questionsFormArray(): FormArray {
    return this.formGroup.get('questions') as FormArray;
  }

 
  changeQuestion($event: any, index: number) {
    const questionComponent = this.questionsComponentArray[index];
    
    
  }


  

}
