import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class AppService {

  authenticated=false;
  currentUser: {login: String, password: String};

  constructor(private http: HttpClient) {
  }

  authenticate(credentials, callback) {
    debugger;
    // debugger;
    // this.currentUser.login = credentials.login;
    // this.currentUser.password = credentials.password;

    const headers = new HttpHeaders(credentials ? {
      authorisation: 'Basic ' + btoa(credentials.login + ':' + credentials.password)
    } : {});

    this.http.get('user', {headers: headers}).subscribe(response => {
      // debugger;
      this.authenticated = !!response['name']; //double excl. marks cast it to boolean
      return callback && callback();
    })

  }

  createUser(registrationData: Object) {
    this.http.post('register', registrationData);
  }
}
