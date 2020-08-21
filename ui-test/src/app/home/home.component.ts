import { UtlityService } from './../utlity.service';
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private utilityService: UtlityService
  ) { }

  ngOnInit(): void { }

  logout() {
    let id = this.route.snapshot.params['id'];
    this.utilityService.logout(id).subscribe(res => {
      if(res.callerId == 'logout') {
        console.log('callerId:', res);
        this.router.navigate(['/logout']);
      }
    });
  }
}
