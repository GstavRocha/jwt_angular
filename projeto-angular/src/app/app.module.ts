import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { LoginComponent } from './login/login.component';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {ButtonModule} from "primeng/button";
import {TableModule} from "primeng/table";
import {HttpClientModule} from "@angular/common/http";
import {InputTextModule} from "primeng/inputtext";
import {PasswordModule} from "primeng/password";
import {MenubarModule} from "primeng/menubar";
import {CardModule} from "primeng/card";
import {FormsModule} from "@angular/forms";
import {FieldsetModule} from "primeng/fieldset";
import {authInterceptorProviders} from "./_helpers/auth.interceptor";


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ButtonModule,
    TableModule,

    HttpClientModule,
    InputTextModule,
    PasswordModule,
    MenubarModule,
    CardModule,
    FormsModule,
    FieldsetModule,

  ],
  providers: [authInterceptorProviders],
  bootstrap: [AppComponent]
})
export class AppModule { }
