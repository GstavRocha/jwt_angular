import { Component, OnInit } from '@angular/core';
import {UserService} from "../user.service";
import {AuthService} from "../auth.service";
import {TokenStorageService} from "../token-storage.service";
import {TokenService} from "../token.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  form: any = {};
  isLoogged = false;
  noLoogged = false;
  erroMessage = '';
  roles: string[]=[];
  constructor( private authService: AuthService, private tokenStorage: TokenService){ }

  ngOnInit(): void {
    if (this.tokenStorage.getToken()) {
      this.isLoogged = true;
      this.roles = this.tokenStorage.getToken().roles;
    }
  }
  onSubt https://www.bezkoder.com/angular-10-jwt-auth/
parei aqui
}
