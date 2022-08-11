import { Component, OnInit } from '@angular/core';
import {UserService} from "../user.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  usuario = '';
  senha = '';
  constructor(private user: UserService) { }

  ngOnInit(): void {
    this.login();
    this.getCliente();
  }
  login(): void{
    this.user.login(this.usuario, this.senha);
  }
  getCliente():void {
    this.user.getCliente();
    console.log(this.usuario, this.login())
  }
}
