import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {

  formGroup: FormGroup;

  constructor(private _apiService: ApiService, private _router: Router, private _fb: FormBuilder) { 
    // this.signUp('grantpablo4@gmail.com', 'password');
    this.formGroup = _fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required]]
    })
  }

  ngOnInit(): void {
  }


  get emailControl(): FormControl {
    
    return this.formGroup.controls["email"] as FormControl;
  }

  signUp() {

    this._apiService.signup(this.formGroup.get('email').value, this.formGroup.get('password').value).subscribe(() => {
      console.log('hello world');
      this._router.navigate(['form', 'dashboard'])
    }, (response: HttpErrorResponse) => {

    //get the first error returned in the form and place it here.
      const errors = response.error.errors;
      for (const key of Object.keys(errors)) {
        const listErrors: string[] = errors[key];


        //iterate over the error messages and display the first error message possible.
        listErrors.forEach(message => {
          this.emailControl.setErrors({message: message});
          return;
        });
      
    }


    });
  }
}
