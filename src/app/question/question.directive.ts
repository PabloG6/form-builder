import { ComponentFactoryResolver, Directive, Type, ViewContainerRef } from '@angular/core';
import { AddQuestionComponent } from './add-question/add-question.component';
import { RadioComponent } from './radio/radio.component';
import { TextComponent } from './text/text.component';

@Directive({
  selector: '[appQuestion]'
})
export class QuestionDirective {
  

  constructor(private _componentFactoryResolver: ComponentFactoryResolver, private _viewContainerRef: ViewContainerRef) { 
    
  }




 
  public setQuestion(type: 'radio' | 'select' | 'text' | 'number' | 'date') {
    switch(type) {

      case 'radio': {
        this.generateComponent<RadioComponent>(RadioComponent);
        break;
      }

      case 'number': {
        break;
      }

      case 'select': {
        break;
      }

      case 'text': {
      
        this.generateComponent<TextComponent>(TextComponent);
        break;
      }

      case 'date': {
        break;
      }

       default: {
        this.generateComponent<TextComponent>(TextComponent);
      }
    }
  }

  private generateComponent<T>(c: Type<T>) {
    this._viewContainerRef.clear();
    const component = this._componentFactoryResolver.resolveComponentFactory<T>(c);
    return this._viewContainerRef.createComponent(component);
  }

  private initComponent() {
    // this._viewContainerRef.clear();
    // const component = this._componentFactoryResolver.resolveComponentFactory<AddQuestionComponent>(AddQuestionComponent);
    // this._viewContainerRef.createComponent(component);
  }
}
