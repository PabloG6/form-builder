import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(private _apiService: ApiService, private _router: Router) { 
    this.login('grantpablo4@gmail.com', 'password');
  }

  ngOnInit(): void {
  }
  login(email: string, password: string) {
    this._apiService.login('grantpablo4@gmail.com', 'password').subscribe(() => {
      console.log('hello world');
      this._router.navigate(['form', 'create'])
    });
  }

}
