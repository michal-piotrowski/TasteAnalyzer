import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {HttpClientModule} from '@angular/common/http';
import {LoginFormComponent} from './login-form/login-form.component';
import {FormsModule} from "@angular/forms";
import { DashboardComponent } from './dashboard/dashboard.component';
import {RouterModule, Routes} from "@angular/router";
import {AppService} from "./app.service";
import { ConnectSpotifyAccountComponent } from './connect-spotify-account/connect-spotify-account.component';
import { RegistrationFormComponent } from './registration-form/registration-form.component';

const routes: Routes = [
  {path: '', pathMatch:'full', redirectTo: 'home' },
  {path:'home', component: DashboardComponent},
  {path: 'login', component: LoginFormComponent},
  {path: 'register', component: RegistrationFormComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    LoginFormComponent,
    ConnectSpotifyAccountComponent,
    RegistrationFormComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot(routes),
  ],
  providers: [AppService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
