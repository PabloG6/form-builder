import { Directive, Inject, InjectionToken } from "@angular/core";
import { NgControl } from "@angular/forms";
import { Observable, Subject } from "rxjs";


export const FORM_FIELD_TOKEN = new InjectionToken<HfxFormFieldControl<any>>("HFX_FORM_FIELD")
@Directive()
export abstract class HfxFormFieldControl<T> {

    readonly stateChanges: Observable<void>;

   readonly ngControl: NgControl;

    errorState: boolean;

    focused: boolean;


    

}