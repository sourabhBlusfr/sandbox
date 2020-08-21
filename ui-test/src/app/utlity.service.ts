import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class UtlityService {
  orderUrl =
    'http://52.163.221.13:8300/gktest/getAllOrders?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c';
  saveUrl =
    'http://52.163.221.13:8300/gktest/createCustomer?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c';
  
  logoutUrl = 'URL: https://kem.greenkoncepts.com/ems/services/ResourceService/logout?';
    constructor(
    private http: HttpClient,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  saveForm(data: any): Observable<any> {
    return this.http.post(this.saveUrl, data);
  }

  getUsers(): Observable<any> {
    return this.http
      .get(this.orderUrl)
      .pipe(map((res: any) => <any>res));
  }

  logout(id: any): Observable<any> {
    return this.http
    .get(`${this.orderUrl}key=${id}`)
    .pipe(map((res: any) => <any>res));
  }
}
