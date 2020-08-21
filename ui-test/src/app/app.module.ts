import { UtlityService } from './utlity.service';
import { Authguard } from './authguard.service';
import { LoginService } from './login.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { AddComponent } from './add/add.component';
import { ViewComponent } from './view/view.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { NavsComponent } from './navs/navs.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    AddComponent,
    ViewComponent,
    NavsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [UtlityService,Authguard,LoginService],
  bootstrap: [AppComponent]
})
export class AppModule { }
