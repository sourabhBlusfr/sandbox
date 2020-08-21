import { UtlityService } from './../utlity.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.scss'],
})
export class AddComponent {
  user: any = {};

  constructor(private utilityService: UtlityService, private router: Router) { }

  saveUser() {
    this.utilityService.saveForm(this.user).subscribe(
      (result) => {
        this.router.navigate(['/view']);
      }
    );
  }

  cancel(){
    this.router.navigate(['/']);
  }
}
