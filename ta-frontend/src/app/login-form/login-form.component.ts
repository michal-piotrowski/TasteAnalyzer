import { Component, OnInit } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {AppService} from "../app.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent {
  creds: Object = {login: '', password: ''};
  shouldShowRegForm = false;

  constructor(private app: AppService, private http: HttpClient, private router: Router) {
    // let body = {
    //   "login": "Michal",
    //   "password": "hasloMichala"
    // }
    // http.post('http://localhost:8080/resource', body).subscribe(data=>this.creds=data);
  }

  onSubmit() {
    debugger;
    this.app.authenticate(this.creds, () => {
      debugger;
      this.router.navigateByUrl('/home');
    });
    return false;
  }

  toggleRegFormVisibility() {
    this.shouldShowRegForm = !this.shouldShowRegForm;
  }
}
