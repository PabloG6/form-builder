import { Component, ComponentFactoryResolver, ComponentRef, Directive, Type, ViewContainerRef } from '@angular/core';
import { AddQuestionComponent } from './add-question/add-question.component';
import { RadioComponent } from './radio/radio.component';
import { TextComponent } from './text/text.component';

@Directive({
  selector: '[appQuestion]'
})
export class QuestionDirective {
  


  constructor(private _componentFactoryResolver: ComponentFactoryResolver, private _viewContainerRef: ViewContainerRef) { 
    
  }




  get currentDirective(): any {
    return this.currentDirective;
  }
 
  public setQuestion(type: 'radio' | 'select' | 'text' | 'number' | 'date'): ComponentRef<any> {
    switch(type) {

      case 'radio': {
        return this.generateComponent<RadioComponent>(RadioComponent);
       
      }

      case 'number': {

        return null;
      }

      case 'select': {
        return this.generateComponent<RadioComponent>(RadioComponent)

    
      }

      case 'text': {
      
       return this.generateComponent<TextComponent>(TextComponent);
       
      }

      case 'date': {
        return null;
      }

       default: {
        return this.generateComponent<TextComponent>(TextComponent);
      }
    }
  }

  private generateComponent<T>(c: Type<T>): ComponentRef<T> {
    this._viewContainerRef.clear();
    const component = this._componentFactoryResolver.resolveComponentFactory<T>(c);
    return this._viewContainerRef.createComponent(component);
  }

 
}
