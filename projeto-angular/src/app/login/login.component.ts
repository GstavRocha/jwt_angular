import { Component, OnInit } from '@angular/core';
import {UserService} from "../user.service";
import {AuthService} from "../auth.service";
import {TokenStorageService} from "../token-storage.service";
import {TokenService} from "../token.service";
import {User} from "../user";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  usuario = '';
  senha = '';
  currentUser: any;
  form: any = {};
  isLoggedIn = false;
  isLoginFailed = false;
  errorMessage = '';
  roles: string[] = [];
  accessToken: any;
  constructor( private authService: AuthService, private tokenStorage: TokenStorageService){

  }

  ngOnInit(): void {
    if (this.tokenStorage.getToken()) {
      this.isLoggedIn = true;
    }
  }
  onSubmit(): void {
    this.authService.login(this.usuario, this.senha).subscribe(
      data => {
        this.tokenStorage.saveToken(this.accessToken);
        this.isLoginFailed = false;
        this.isLoggedIn = true;
        this.reloadPage();
      },
      err => {
        this.errorMessage = err.error.message;
        this.isLoginFailed = true;
      }
    );
  }
  reloadPage(): void {
    window.location.reload();
  }
}
