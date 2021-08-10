import { AfterViewInit, Component, ComponentFactoryResolver, ComponentRef, OnDestroy, OnInit, TemplateRef, ViewChild, ViewContainerRef } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { SubSink } from 'subsink';
import { FormBuilderComponent } from '../form-builder/form-builder.component';
import { AddQuestionComponent } from '../question/add-question/add-question.component';
import { QuestionDirective } from '../question/question.directive';

@Component({
  selector: 'app-create-form',
  templateUrl: './create-form.component.html',
  styleUrls: ['./create-form.component.scss']
})
export class CreateFormComponent implements OnInit, AfterViewInit, OnDestroy {

  formGroup: FormGroup
  subsink: SubSink = new SubSink();
  
  questions: ComponentRef<AddQuestionComponent>[] = [];
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

  // @ViewChild('idRef') templateRef: AddQuestionComponent;
  component: ComponentRef<AddQuestionComponent>;
  constructor(private _fb: FormBuilder, private _viewContainerRef: ViewContainerRef, private _factoryResolver: ComponentFactoryResolver) { 
    this.formGroup = _fb.group({
      questionPrompt: ['', Validators.required],
      questionType: ['text', Validators.required],
      required: [null]
    })

    
  }
  ngOnDestroy(): void {
    this.subsink.unsubscribe();
  }
  ngAfterViewInit(): void {
   

    // this.templateRef.onDelete.subscribe(() => {
    //   console.log("hello world x2");
    // })
  }

  ngOnInit(): void {
   
  }



  onSelectionChange(value: 'radio' | 'select' | 'text' | 'date') {
    

  }
  onSubmit() {
    console.log(this.formGroup.value);
  }
  
  addQuestion() {
  
    const componentFactory = this._factoryResolver.resolveComponentFactory(AddQuestionComponent);
    const component = this._viewContainerRef.createComponent(componentFactory);
    console.log('host view', component.hostView);
    component.instance._cdr.detectChanges();
    component.instance.output.subscribe((val) => {
      console.log("output addQuestion", val)
    })
    this.subsink.sink = component.instance.onDelete.subscribe((instance) => {
      const component = this.questions.find(component => component.instance === instance);
      console.log(component);
      this.questions = this.questions.filter(component => component.instance !== instance)
      console.log("this._viewContainerRef.indexOf: ", component);
      const index = this._viewContainerRef.indexOf(component.hostView);
      console.log(index);

      this._viewContainerRef.detach(index);
      console.log(this.questions);

    }, () => {
    })

    this.questions.push(component);
  }

  

}
