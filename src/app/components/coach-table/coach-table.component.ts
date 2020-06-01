import { Component, OnInit, Input } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { CoachAssignRanksModalComponent } from '../coach-assign-ranks-modal/coach-assign-ranks-modal.component';
import { RestService } from 'src/app/services/rest.service';

@Component({
  selector: 'app-coach-table',
  templateUrl: './coach-table.component.html',
  styleUrls: ['./coach-table.component.css']
})
export class CoachTableComponent implements OnInit {
  @Input() displaying: any;
  @Input() rows: any[];

  constructor(
    private modalService: NgbModal,
    private restService: RestService) { }

  ngOnInit(): void {
    this.populateTable();
  }

  populateTable(): void {
    if (this.displaying == "matches") {
      this.restService.getMatches().subscribe(res => this.rows = res);
    }
    else {
      this.restService.getPracticeSessions().subscribe(res => this.rows = res);
    }
  }

  assignRanks(row): void {
    const ref = this.modalService.open(CoachAssignRanksModalComponent);
    ref.componentInstance.row = row;
    ref.componentInstance.displaying = this.displaying;

    ref.result.then(onFulFilled => {
      this.populateTable();
    });
  }
}