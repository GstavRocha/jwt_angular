import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {map, Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})

export class UsersService {
  localhost: string;
  localHostCliente: string;
  localHostLogin: string;
  constructor(private http: HttpClient) {
    this.localhost = "http://localhost:3000"
    this.localHostCliente = "http://localhost:3000/clientes"
    this.localHostLogin = "http://localhost:3000/login"

  }
  getClientes(): Observable<any>{
    let token = localStorage.getItem('access_token')!;
    const httpOtptions = {
      'content-type': 'application/json',
      'x-access-token': token
    }
    return this.http.get<any>(this.localhost,{
      'headers': new HttpHeaders(httpOtptions)
    })
  }
  login(name: string, password: string){
    return this.http.post<{token: string}>(this.localHostLogin,{
      name: name,
      password: password,
    })
      .pipe(
      map((result: {token: string})=>{
        localStorage.setItem('access_token', result.token);
        return true;
      })
      );
  }
  logout():boolean{
    localStorage.removeItem('access_token');
    return true;
  }
  get logged(): boolean{
    return localStorage.getItem('access_token') !== null;
  }


}
