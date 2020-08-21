import { Injectable } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  isLoggedIn: boolean = false;
  redirectUrl: string;
  value: string;
  loginUrl = 'https://kem.greenkoncepts.com/ems/services/ResourceService/login?';

  constructor(
    private http: HttpClient,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  login(username: any, password: any) {
    return this.http
      .get(`${this.loginUrl}username=${username}&credential=${password}`)
      .pipe(
        map((users) => {
          console.log('user:', users);
          if (users['username'] === username) {
            this.router.navigate(['/navs']);
            this.isLoggedIn = true;
          } else {
            this.router.navigate(['/login']);
            this.isLoggedIn = false;
          }
          return this.isLoggedIn;
        })
      );
  }
}
