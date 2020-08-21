import { NavsComponent } from './navs/navs.component';
import { ViewComponent } from './view/view.component';
import { AddComponent } from './add/add.component';
import { Authguard } from './authguard.service';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

export const routes: Routes = [
  { path: 'logout', component: LoginComponent },
  { path: 'login', component: LoginComponent },
  {
    path: '',
    component: HomeComponent,
    canActivate: [Authguard],
    children: [
      {
        path: '',
        redirectTo: 'navs',
        pathMatch: 'full'
      },
      { path: 'navs', component: NavsComponent },
      { path: 'add', component: AddComponent },
      { path: 'view', component: ViewComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
