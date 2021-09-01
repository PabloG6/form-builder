import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
@Injectable({
  providedIn: 'root',
})
export class ApiService {
  
  constructor(
    private _httpClient: HttpClient,
    private _cookieService: CookieService
  ) {}


  
  signup(email: string, password: string) {
    return this._httpClient
      .post('http://localhost:4000/api/signup', {
        email: email,
        password: password,
      })
      .pipe(
        tap((response: any) => {
          console.log(response);
          this._cookieService.set('token', response.token);
        })
      );
  }

  login(email: string, password: string) {
    return this._httpClient
      .post('http://localhost:4000/api/login', {
        email: email,
        password: password,
      })
      .pipe(
        tap((response: any) => {
          console.log(response);
          this._cookieService.set('token', response.token);
        })
      );
  }

  submitForm(body: any) {
    return this._httpClient.post(
      'http://localhost:4000/api/forms',
      body,
      { headers: this.httpHeaders }
    );
  }

  updateForm(id: string): Observable<any> {
    return this._httpClient.put('http://localhost:4000/api/forms', {})
  }


  getForm(id: string) {
    return this._httpClient.get(`http://localhost:4000/api/forms/${id}`);
  }

  getFormList(): Observable<any> {
    return this._httpClient.get<any[]>(
      'http://localhost:4000/api/forms',
      
      { headers: this.httpHeaders }
    );
  }

  get token() {
    return this._cookieService.get('token');
  }
  get httpHeaders() {
    console.log(this.token);
    return new HttpHeaders().append('authorization', `bearer ${this.token}`);
  }
}
