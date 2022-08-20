import { Component, OnInit } from '@angular/core';
import {UsersService} from "../users.service";
import {Router} from "@angular/router";


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  data: any;
  constructor(
    private user: UsersService, private route: Router
  ) {
    this.data = '';
  }

  ngOnInit(): void {
    this.user.getClientes().subscribe({
      next:(retorno: any) => this.data = retorno
    });
  }
  onLogoff(): void{
    if(this.user.logout()){
      this.route.navigate(['/login']);
    }
  }

}
