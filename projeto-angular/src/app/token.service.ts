import { Injectable } from '@angular/core';
const Token_key = 'auth-token';
const User_key = 'auth-user';
@Injectable({
  providedIn: 'root'
})
export class TokenService {
  signOut():void{
    window.sessionStorage.clear();
  }
  saveToken(token: string):void{
    window.sessionStorage.removeItem(Token_key);
    window.sessionStorage.setItem(Token_key, token)
  }
  public getToken(): string {
    return sessionStorage.getItem(TOKEN_KEY);
  }
}
