import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {

  constructor(private _apiService: ApiService, private _router: Router) { 
    this.signUp('grantpablo4@gmail.com', 'password');
  }

  ngOnInit(): void {
  }


  signUp(email: string, password: string) {
    this._apiService.signup('grantpablo4@gmail.com', 'password').subscribe(() => {
      console.log('hello world');
      this._router.navigate(['forms', 'create'])
    });
  }
}
