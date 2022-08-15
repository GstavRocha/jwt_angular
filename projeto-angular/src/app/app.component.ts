import {Component, OnInit} from '@angular/core';
import {TokenStorageService} from "./token-storage.service";
import {UsersService} from "./users.service";
import {User} from "./user";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  // private roles: string[];
  isLoggedIn = false;
  username ?: User;
  constructor(private tokenStorageService: TokenStorageService) {
  }
  ngOnInit(): void {
    this.isLoggedIn = !! this.tokenStorageService.getToken();
  }
  logout(): void{
    this.tokenStorageService.singOut();
    window.location.reload();
  }


}
