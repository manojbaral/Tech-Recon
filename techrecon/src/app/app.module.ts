import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { HomeComponent } from './components/home/home.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { ProfileComponent } from './components/profile/profile.component';
import { ProductsComponent } from './components/products/products.component';
import { TeammemberComponent } from './components/teammember/teammember.component';
import { ContactusComponent } from './components/contactus/contactus.component';
import {RouterModule, Routes} from "@angular/router";
import {ValidateService} from "app/services/validate.service";
import {FlashMessagesModule} from "angular2-flash-messages";
import {AuthService} from "app/services/auth.service";

const appRoutes:Routes=[
  {path:'',component:HomeComponent},
  {path:'products',component:ProductsComponent},
  {path:'teammember',component:TeammemberComponent},
  {path:'contactus',component:ContactusComponent},
  {path:'register',component:RegisterComponent},
  {path:'login',component:LoginComponent},
  {path:'dashboard',component:DashboardComponent},
  {path:'profile',component:ProfileComponent},




]

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    LoginComponent,
    RegisterComponent,
    HomeComponent,
    DashboardComponent,
    ProfileComponent,
    ProductsComponent,
    TeammemberComponent,
    ContactusComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(appRoutes),
    FlashMessagesModule
  ],
  providers: [ValidateService,AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }

//stop at 14:15

