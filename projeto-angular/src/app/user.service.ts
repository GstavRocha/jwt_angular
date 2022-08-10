import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {map, Observable} from "rxjs";
import {User} from "./user";
const httpOptions={
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
    Authorization : 'x-access-token'
  })
}
@Injectable({
  providedIn: 'root'
})
export class UserService {
  localhost = "http://localhost:3000/login";
  localhostClientes = "http://localhost:3000/cliente";

  constructor(private http: HttpClient) { }
  login(name: string, password: string): Observable<User[]>{
    return this.http.post<(User)>(this.localhost,{name, password},httpOptions)
      .pipe(
        map((retorno: any) => retorno.data)
      )
  }
  getCliente():Observable<User[]>{
    return this.http.get<any>(this.localhostClientes)
  }
}
