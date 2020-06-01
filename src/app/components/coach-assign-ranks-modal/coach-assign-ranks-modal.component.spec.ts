import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CoachAssignRanksModalComponent } from './coach-assign-ranks-modal.component';

describe('CoachAssignRanksModalComponent', () => {
  let component: CoachAssignRanksModalComponent;
  let fixture: ComponentFixture<CoachAssignRanksModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CoachAssignRanksModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CoachAssignRanksModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
