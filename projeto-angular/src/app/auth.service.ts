import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

const AUTH_API = "http://localhost:3000/login";
const httOptions = {
  headers: new Headers({'Content-Type': 'application/jason', Authorization: 'x-access-token'})
}

@Injectable()
export class AuthService{
  constructor(private http: HttpClient) {}

  login(credentials): Observable<any>{
    return this.http.post(AUTH_API + 'signin'{
      username: credentials.username, password: credentials.password
    }, httOptions)
  }

  getAuthorizationToken(){
    return 'some-auth-token';
  }
}
