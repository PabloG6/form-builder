import { AfterViewInit, Component, ComponentFactoryResolver, ComponentRef, OnInit, ViewContainerRef } from '@angular/core';
import { AnonymousSubject } from 'rxjs/internal/Subject';
import { AddQuestionComponent } from '../question/add-question/add-question.component';
import { TextFieldUnion } from '../types/form-field.type';

@Component({
  selector: 'app-form-builder',
  templateUrl: './form-builder.component.html',
  styleUrls: ['./form-builder.component.scss']
})
export class FormBuilderComponent implements OnInit, AfterViewInit {

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
  component: any;
  constructor(private _factoryResolver: ComponentFactoryResolver, private _viewContainerRef: ViewContainerRef) { }
  ngAfterViewInit(): void {
    // this.component.instance.output.subscribe((val: any) => {
    //   console.log("hello world", val);
    //  })
  }

  ngOnInit(): void {
    const componentFactory = this._factoryResolver.resolveComponentFactory(AddQuestionComponent);
     this.component = this._viewContainerRef.createComponent<AddQuestionComponent>(componentFactory);

     
  

 
  }

 
  

  
}
