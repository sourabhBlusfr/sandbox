import { Observable } from 'rxjs';
import { UtlityService } from './../utlity.service';
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.scss'],
})
export class ViewComponent implements OnInit {
  details: any[];
  data;

  constructor(private utilityService: UtlityService) {}

  ngOnInit() {
    this.getUserList();
  }

  getUserList() {
    this.utilityService.getUsers().subscribe((res) => {
      this.details = res;
      console.log(this.details)
    });
  }
}
