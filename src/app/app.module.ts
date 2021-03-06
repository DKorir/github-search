import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { FormsModule } from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import { UserComponent } from './user/user.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { RepoComponent } from './repo/repo.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { HomepageComponent } from './homepage/homepage.component';
import { StyleDirectiveDirective } from './style-directive.directive';
import { TimeTrackPipe } from './time-track.pipe';


@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    NavBarComponent,
    RepoComponent,
    NotfoundComponent,
    HomepageComponent,
    StyleDirectiveDirective,
    TimeTrackPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
