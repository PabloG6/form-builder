import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import {tap} from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private _httpClient: HttpClient, private _cookieService: CookieService) { }



  signup(email: string, password: string) {
    return this._httpClient.post('http://localhost:4000/api/signup', {email: email, password: password}).pipe(tap((response:any) => {
      console.log(response);
      this._cookieService.set('token', response.token);

    }));
  }

  login(email: string, password: string) {
    return this._httpClient.post('http://localhost:4000/api/login', {email: email, password: password}).pipe(tap((response: any) => {
      console.log(response);
      this._cookieService.set('token', response.token)
    }))


  }

  submitForm(body: any) {
    return this._httpClient.post('http://localhost:4000/api/forms', {title: "some random title", description: 'some random description', questions: body});
  }

  getForm(id: string) {
    return this._httpClient.get(`http://localhost:4000/api/forms/${id}`)
  }
}
