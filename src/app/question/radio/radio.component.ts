import { Component, OnDestroy, OnInit } from '@angular/core';
import { AbstractControl, FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { DuplicateStateMatcher } from 'src/app/validators/duplicate-state.matcher';
import { CustomValidator } from 'src/app/validators/validator';

@Component({
  selector: 'app-radio',
  templateUrl: './radio.component.html',
  styleUrls: ['./radio.component.scss']
})
export class RadioComponent implements OnInit, OnDestroy {

  optionsFormArray = new FormArray([], {validators: CustomValidator.avoidDuplicates()});
  
  matcher = new DuplicateStateMatcher();
  constructor(private _fb: FormBuilder) {

    
    this.addOption();

   }
  ngOnDestroy(): void {
    this.optionsFormArray.clear();
  }

  ngOnInit(): void {
  }

  addOption() {


    const formGroup = this._fb.group({
      title: [`Option ${this.optionsFormArray.length + 1}`, [Validators.required]],
      value: [`option${this.optionsFormArray.length + 1}`, [Validators.required]]
    });


    console.log(formGroup);

    
    this.optionsFormArray.push(formGroup);

  }


  onFocus($event: FocusEvent) {

    console.log('on focus');
    const target = (<HTMLInputElement>$event.target);
    setTimeout(() => target.select(), 0);
  
  }

  onBlur($event: FocusEvent, index: number) {
    const formGroup = this.optionsFormArray.at(index);
    
   if(!formGroup.value.title) 
    formGroup.patchValue({title: `Option ${this.optionsFormArray.length}`})

  if(!formGroup.value.value) {
    formGroup.patchValue({value: `option${this.optionsFormArray.length}`})

  }
  }

  getOption(option: any) {
    return option as FormGroup;
  }

  displayError(option: any) {
    console.log(option);
    return option as FormGroup;
  }


  get values() {
    return this.optionsFormArray.controls.map((control: AbstractControl) => {
      if(control instanceof FormGroup) {
         return control.value;
      }
    });
  }
  removeAt(index: number) {
    this.optionsFormArray.removeAt(index);
  }


  
  


}


