import { Injectable } from '@angular/core';
const TOKEN_KEY = 'auth-token';
const User_key = 'auth-user';
@Injectable({
  providedIn: 'root'
})
export class TokenService {
  signOut():void{
    window.sessionStorage.clear();
  }
  saveToken(token: string):void{
    window.sessionStorage.removeItem(TOKEN_KEY);
    window.sessionStorage.setItem(TOKEN_KEY, token)
  }
  getToken(): any { // por default ele está setado como String
    return sessionStorage.getItem(TOKEN_KEY)
  }
}
