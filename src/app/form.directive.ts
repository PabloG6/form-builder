import { ComponentFactoryResolver, Directive, Input, OnInit, Type, ViewContainerRef } from '@angular/core';

import { TextFieldUnion } from './types/form-field.type';

@Directive({
  selector: '[appForm]'
})
export class FormDirective implements OnInit {

  @Input() input!: TextFieldUnion;
  constructor(private _viewContainerRef: ViewContainerRef, private _componentFactoryResolver: ComponentFactoryResolver) {

   
   }
  ngOnInit(): void {
    
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
