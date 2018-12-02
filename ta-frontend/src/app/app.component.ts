import {Component, HostBinding, OnInit} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Router} from "@angular/router";
import {finalize} from "rxjs/operators";
import {AppService} from "./app.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'TasteAnalyzer';
  ngOnInit() {
    // console.log(http.get('/login', function(req, res) {
    //   const scopes = 'user-read-private user-read-email';
    //   res.redirect('https://accounts.spotify.com/authorize' +
    //     '?response_type=code' +
    //     '&client_id=' + my_client_id +
    //     (scopes ? '&scope=' + encodeURIComponent(scopes) : '') +
    //     '&redirect_uri=' + encodeURIComponent(redirect_uri));
    // }));
}
  isAuthenticated() {
    debugger;
    return this.app.authenticated;
  }

  constructor(private app: AppService, private http: HttpClient, private router: Router) {
  }
  logout() {
    if (this.app.authenticated) {
      this.http.post('logout', {}).pipe( finalize( () => {
        this.app.authenticated = false;
        this.router.navigateByUrl('/login');
      })).subscribe();
    } else {
      alert("You've not been logged in");
    }
  }

  deselectHomeItem() {
    alert('homeItemClassChanged');
  }
}
