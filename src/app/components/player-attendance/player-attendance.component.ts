import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { PlayerMarkAttendanceModalComponent } from '../player-mark-attendance-modal/player-mark-attendance-modal.component';

@Component({
  selector: 'app-player-attendance',
  templateUrl: './player-attendance.component.html',
  styleUrls: ['./player-attendance.component.css']
})
export class PlayerAttendanceComponent implements OnInit {

  constructor(private modalService: NgbModal) { }

  ngOnInit(): void { }

  markAttendance() {
    const ref = this.modalService.open(PlayerMarkAttendanceModalComponent);
    ref.result.then(onFulfilled => { });
  }
}