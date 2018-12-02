import {Component, OnInit} from '@angular/core';
import {AppService} from "../app.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-registration-form',
  templateUrl: './registration-form.component.html',
  styleUrls: ['./registration-form.component.css']
})
export class RegistrationFormComponent implements OnInit {

  shouldShowSep = false;

  registrationData: Object =
    {
      login: '',
      password: '',
      passwordRetype: ''
    };

  constructor(private http: AppService, private router: Router) {
  }

  ngOnInit() {

  }

  registerNewUser() {
    this.http.createUser(this.registrationData);
  }

  toggleSep() {
    this.shouldShowSep = !this.shouldShowSep;
  }
}
