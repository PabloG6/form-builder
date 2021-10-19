import { Directive, Inject, InjectionToken } from "@angular/core";
import { Observable, Subject } from "rxjs";


export const FORM_FIELD_TOKEN = new InjectionToken<HfxFormFieldControl<any>>("HFX_FORM_FIELD")
@Directive()
export abstract class HfxFormFieldControl<T> {

    readonly stateChanges: Observable<void>;

    errorState: boolean;

    focused: boolean;


    

}