import {Injectable} from "@angular/core";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {map, Observable} from "rxjs";
import {User} from "./user";


const AUTH_API = "http://localhost:3000/login";
const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable()
export class AuthService{

  constructor(private http: HttpClient) {}

  login(name: string, password: string): Observable<User[]>{
    return this.http.post<(User)>(AUTH_API,{name, password},httpOptions)
      .pipe(
        map((retorno: any) => retorno.data)
      )
  }
  getAuthorizationToken(){
    return 'some-auth-token';
  }
}
