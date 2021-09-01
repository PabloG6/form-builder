import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  formGroup: FormGroup;
  constructor(private _apiService: ApiService, private _router: Router, private _fb: FormBuilder) { 
    this.formGroup = this._fb.group({
      email: ['grantpablo4@gmail.com', [Validators.email, Validators.required]],
      password: ['password', [Validators.required]]
    })
  }

  ngOnInit(): void {
  }
  login() {
    this._apiService.login(this.formGroup.get('email').value, this.formGroup.get('password').value).subscribe(() => {
      console.log('hello world');
      this._router.navigate(['form', 'create'])
    });
  }

}
