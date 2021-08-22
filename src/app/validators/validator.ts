import { AbstractControl, FormArray, FormGroup, NgControlStatus, ValidationErrors, ValidatorFn } from "@angular/forms";

export class CustomValidator {
    static avoidDuplicates(): ValidatorFn {
        console.log('avoid duplicates');
        return (control: AbstractControl): ValidationErrors | null => {

            const optionsArray: any[] = [];
            if(control instanceof FormArray) {
                control.controls.forEach((formControl: AbstractControl, index: number) => {
                    if(formControl instanceof FormGroup) {
                        //
                        const alreadyExists = optionsArray.some(value => value === formControl.get('value').value)
                        console.log(optionsArray);
                        console.log(alreadyExists);
                        if(alreadyExists) {
                            console.log(formControl);
                            control.at(index).setErrors({duplicate: true});
                            return;
                        }
                        optionsArray.push(formControl.get('value').value)
                        

                    }

               

                })
            }
            return null;
        }

    }
}