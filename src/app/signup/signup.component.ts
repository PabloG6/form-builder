import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
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


  signUp() {

    this._apiService.signup(this.formGroup.get('email').value, this.formGroup.get('password').value).subscribe(() => {
      console.log('hello world');
      this._router.navigate(['form', 'dashboard'])
    }, (error) => {

      //todo do something for the error here.
      console.log(error);
    });
  }
}
