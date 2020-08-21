import { LoginService } from './login.service';
import { Injectable } from '@angular/core';
import {
  CanActivate,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  Router,
} from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class Authguard implements CanActivate {
  constructor(
    private router: Router,
    private authenticationService: LoginService
  ) {}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    let url = state.url;

    return this.checkLogin(url);
  }

  checkLogin(url: string): boolean {
    if (this.authenticationService.isLoggedIn) {
      return true;
    }

    this.authenticationService.redirectUrl = url;
    this.router.navigate(['/login']);
    return false;
  }
}
