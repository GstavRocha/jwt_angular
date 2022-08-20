import { Component, OnInit } from '@angular/core';
import {UsersService} from "../users.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  user: string;
  password: string;

  constructor(private loginservice: UsersService, private route: Router) {
    this.user = '';
    this.password = '';
  }

  ngOnInit(): void {
  }

  submit(): void {
    this.loginservice.login(
      this.user, this.password
    )
      .pipe()
      .subscribe({
        next: () => {
          this.route.navigate(['/'])
        },
        error: () => {
          console.log(`Usuario ou senha incorretos. Usuario: ${this.user}, Senha: ${this.password}`);
        },
      });
  }
}
