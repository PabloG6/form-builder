import { Component, ComponentFactoryResolver, Directive, Input, OnInit, Type, ViewContainerRef } from '@angular/core';
import { generate } from 'rxjs';
import { CheckboxWrapperComponent } from './checkbox-wrapper/checkbox-wrapper.component';
import { DateWrapperComponent } from './date-wrapper/date-wrapper.component';
import { MatInputWrapperComponent } from './mat-input-wrapper/mat-input-wrapper.component';
import { RadioWrapperComponent } from './radio-wrapper/radio-wrapper.component';
import { SelectWrapperComponent } from './select-wrapper/select-wrapper.component';
import { TextFieldUnion } from './types/form-field.type';

@Directive({
  selector: '[appForm]'
})
export class FormDirective implements OnInit {

  @Input() input!: TextFieldUnion;
  constructor(private _viewContainerRef: ViewContainerRef, private _componentFactoryResolver: ComponentFactoryResolver) {

   
   }
  ngOnInit(): void {
    
    switch(this.input.type) {

      case 'radio': {
        const component = this.generateComponent<RadioWrapperComponent>(RadioWrapperComponent)
        component.instance.prompt = this.input.prompt;
        component.instance.choices = this.input.choices;
        
        break;
      }
      case 'text': {
        const component = this.generateComponent<MatInputWrapperComponent>(MatInputWrapperComponent)
        component.instance.appearance = this.input.appearance;
        component.instance.prompt = this.input.prompt;
        break;

      }

      case 'select': {
        const component = this.generateComponent<SelectWrapperComponent>(SelectWrapperComponent);
        console.log(this.input.options);
        
        component.instance.options = this.input.options;
        component.instance.appearance= this.input.appearance;
        component.instance.prompt = this.input.prompt;
        // component.changeDetectorRef.detectChanges();
        break;

      }


      case 'date': {

        const component = this.generateComponent<DateWrapperComponent>(DateWrapperComponent);
        component.instance.prompt = this.input.prompt;

        break;
      }


      case 'number': {
        break;
      }

      case 'checkbox': {
        const component = this.generateComponent<CheckboxWrapperComponent>(CheckboxWrapperComponent);
        component.instance.choices = this.input.choices;
        component.instance.prompt = this.input.prompt;
        
      }

    }

  }

   get viewContainerRef(): ViewContainerRef {
    return this._viewContainerRef;
   }


   generateComponent<T>(c: Type<T>) {
     
    const componentRef = this._componentFactoryResolver.resolveComponentFactory(c);
    const component = this._viewContainerRef.createComponent(componentRef);
    return component;
    
   }

}
