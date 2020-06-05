import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PlayerMarkAttendanceModalComponent } from './player-mark-attendance-modal.component';

describe('PlayerMarkAttendanceModalComponent', () => {
  let component: PlayerMarkAttendanceModalComponent;
  let fixture: ComponentFixture<PlayerMarkAttendanceModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlayerMarkAttendanceModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlayerMarkAttendanceModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
