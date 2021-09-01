import { FormControl, FormGroupDirective, NgForm } from "@angular/forms";
import { ErrorStateMatcher } from "@angular/material/core";

export class DuplicateStateMatcher implements ErrorStateMatcher {
    isErrorState(control: FormControl, form: FormGroupDirective | NgForm): boolean {

        const formGroup = form.form;
        const isDuplicate: boolean = formGroup.getError('duplicate');
        return isDuplicate;
     
    }

}