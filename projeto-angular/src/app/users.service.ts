import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs";
import {stringifyTask} from "@angular/compiler-cli/ngcc/src/execution/tasks/utils";
const API_URL = 'http://localhost:3000';

@Injectable({
  providedIn: 'root'
})

export class UsersService {
  localhost: string;
  localHostCliente: string;
  token: string;
  constructor(private http: HttpClient) {
    this.token = '';
    this.localhost = "http://localhost:3000"
    this.localHostCliente = "http://localhost:3000/clientes"
  }
  getClientes(): Observable<any>{
    this.token = localStorage.getItem('access-token')!;
    let httpOtptions = {
      headers: new Headers({
        'Content-Type' : 'application/json',
        'x-access-token': this.token
      })
    }
    return this.http.get<any>(`${API_URL}/clientes`,{
      httpOtptions
    })
  }

}
