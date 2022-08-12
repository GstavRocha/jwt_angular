import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
const API_URL = 'http://localhost:3000/clientes';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(private http: HttpClient) {}
  getPublicContent(): Observable<any>{
    return this.http.get(API_URL + 'all', {responseType: "text"})
  }
}
