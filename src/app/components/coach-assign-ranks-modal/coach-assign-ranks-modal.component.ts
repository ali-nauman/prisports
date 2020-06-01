import { Component, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { FormGroup, FormBuilder } from '@angular/forms';
import { RestService } from 'src/app/services/rest.service';

@Component({
  selector: 'app-coach-assign-ranks-modal',
  templateUrl: './coach-assign-ranks-modal.component.html',
  styleUrls: ['./coach-assign-ranks-modal.component.css']
})
export class CoachAssignRanksModalComponent implements OnInit {
  assignRankForm: FormGroup;
  ranks = ['Beginner', 'Medium', 'Advanced']
  row: any;
  displaying: any;

  constructor(
    public modal: NgbActiveModal,
    private formBuilder: FormBuilder,
    private restService: RestService) { }

  ngOnInit(): void {
    console.log('Displaying: ', this.displaying);
    this.assignRankForm = this.formBuilder.group(
      {
        playerA: [`${this.row.playerAId.firstName} ${this.row.playerAId.lastName}`],
        playerARank: [this.row.playerARank],
        playerB: [`${this.row.playerBId.firstName} ${this.row.playerBId.lastName}`],
        playerBRank: [this.row.playerBRank],
        court: [this.row.courtId.name],
        startTime: [this.row.startTime],
        endTime: [this.row.endTime]
      })
  }

  assignPracticeSessionRanks() {
    this.modal.close();
    this.restService.setPracticeSessionRanks(this.row._id, this.assignRankForm.value.playerARank, this.assignRankForm.value.playerBRank).subscribe(res => console.log);
  }

  assignMatchRanks() {
    this.modal.close();
    this.restService.setMatchRanks(this.row._id, this.assignRankForm.value.playerARank, this.assignRankForm.value.playerBRank).subscribe(res => console.log);
  }
}