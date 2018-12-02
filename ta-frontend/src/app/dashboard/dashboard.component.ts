import {Component, EventEmitter, HostBinding, OnInit, Output} from '@angular/core';
import {AppService} from "../app.service";
import {HttpClient} from "@angular/common/http";
import {Router} from "@angular/router";

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  creds = {};
  shouldShowRegistrationForm = true;

  constructor(private app: AppService, private http: HttpClient, private router: Router) {
    debugger;
    let user = app.currentUser;
    if (this.authenticated()) {
      this.shouldShowRegistrationForm = false;
      http.get('resource?login=' + user.login + '&password=' + user.password)
        .subscribe(data => this.creds = data);
    }
  }

  ngOnInit() {
  }

  authenticated(): boolean {
    return this.app.authenticated;
  }

  connectedSpotifyAccount() {
    return false;
  }

  deselectHomeBar() {
    this.router.navigateByUrl('/login');
  }

  getLogin(): String {
    // debugger;
    let login = this.app.currentUser.login;
    if (login !== undefined) {
      return login;
    } else {
      return "### not authenticated";
    }
  }

  showRegistrationForm() {

  }
}
