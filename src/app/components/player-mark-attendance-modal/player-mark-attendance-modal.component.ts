import { Component, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { FormBuilder, FormGroup, Validators, FormArray } from '@angular/forms';
import { RestService } from 'src/app/services/rest.service';

@Component({
  selector: 'app-player-mark-attendance-modal',
  templateUrl: './player-mark-attendance-modal.component.html',
  styleUrls: ['./player-mark-attendance-modal.component.css']
})
export class PlayerMarkAttendanceModalComponent implements OnInit {
  attendanceForm: FormGroup;
  sport: FormGroup = this.formBuilder.group({
    name: ['', Validators.required]
  });

  constructor(
    public modal: NgbActiveModal,
    private formBuilder: FormBuilder,
    private restService: RestService
  ) { }

  ngOnInit(): void {
    this.attendanceForm = this.formBuilder.group({
      sports: this.formBuilder.array([this.formBuilder.group({
        name: ['', Validators.required]
      })])
    })
  }

  get sports(): FormArray { return this.attendanceForm.get('sports') as FormArray; }

  addSport(): void { this.sports.push(this.sport); }
  deleteSport(i: number): void { this.sports.removeAt(i); }

  submitAttendance() {
    this.restService.markAttendance(this.attendanceForm).subscribe(this.modal.close);
  }

}
