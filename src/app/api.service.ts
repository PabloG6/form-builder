import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
const url = environment.apiUrl;
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
      .post(`${url}/signup`, {
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
      .post(`${url}/login`, {
        email: email,
        password: password,
      })
      .pipe(
        tap((response: any) => {
          this._cookieService.set('token', response.token);
        })
      );
  }

  submitForm(body: any) {
    return this._httpClient.post(
      `${url}/forms`,
      body,
      { headers: this.httpHeaders }
    );
  }

  updateForm(form: any): Observable<any> {
    return this._httpClient.put(`${url}/forms/${form.id}`, {form: form}, {
      headers: this.httpHeaders
    })
  }


  getForm(id: string) {
    return this._httpClient.get(`${url}/forms/${id}`);
  }

  getFormList(): Observable<any> {

    return this._httpClient.get<any[]>(
      `${url}/forms`,
      
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
