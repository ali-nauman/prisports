import { Component, OnInit } from '@angular/core';
import { RestService } from 'src/app/services/rest.service';

@Component({
  selector: 'app-admin-manage-coaches',
  templateUrl: './admin-manage-coaches.component.html',
  styleUrls: ['./admin-manage-coaches.component.css']
})
export class AdminManageCoachesComponent implements OnInit {
  coaches: any;

  constructor(private restService: RestService) { }

  ngOnInit(): void {
    this.restService.getCoaches().subscribe(
      res => this.coaches = res,
      err => console.error(err));
  }
}
