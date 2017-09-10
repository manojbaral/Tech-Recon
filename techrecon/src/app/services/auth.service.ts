import { Injectable } from '@angular/core';
import {Headers, Http} from "@angular/http";
import 'rxjs/add/operator/map';
import {tokenNotExpired} from "angular2-jwt";

@Injectable()
export class AuthService {

  authToken: any;
  user: any;
  //isDev: boolean;

  constructor(private http: Http) {
    //this.isDev=false; //change to false before deployment
  }

  //Register User post method
  registerUser(user) {
    let headers = new Headers();
    headers.append('Content.Type', 'application/json');
    return this.http.post('http://localhost:8000/users/register', user, {headers: headers})
    //return this.http.post('users/register', user, {headers: headers})
      .map(res => res.json());
  }

  //Authenticate User Post Method
  authenticateUser(user) {
    let headers = new Headers();
    headers.append('Content.Type', 'application/json');
    return this.http.post('http://localhost:8000/users/authenticate', user, {headers: headers})
    //return this.http.post('users/authenticate', user, {headers: headers})

      .map(res => res.json());

  }

  //get profile
  getProfile() {
    let headers = new Headers();
    this.loadToken();
    headers.append('Authorization', this.authToken);
    headers.append('Content-Type', 'application/json');
    //let ep = this.prepEndpoint('users/profile');
    //return this.http.get(ep, {headers: headers})
    return this.http.get('http://localhost:8000/users/profile', {headers: headers})
    //return this.http.get('users/profile', {headers: headers})


      .map(res => res.json());
  }

//Load Token
  loadToken() {
    const token = localStorage.getItem('id_token');
    this.authToken = token;
  }

  //logged in
  loggedIn() {
    return tokenNotExpired();
  }


  //Storeuserdata
  storeUserData(token, user) {
    localStorage.setItem('id_token', token);
    localStorage.setItem('user', JSON.stringify(user));
    this.authToken = token;
    this.user = user;

  }

  //Log out
  logout() {
    this.authToken = null;
    this.user = null;
    localStorage.clear();
  }

  //PrepEnd point
  prepEndpoint(ep) {
    // if (this.isDev) {
    // return ep;
    //} else {
    // return 'http://localhost:8080/' + ep;
  }
}
