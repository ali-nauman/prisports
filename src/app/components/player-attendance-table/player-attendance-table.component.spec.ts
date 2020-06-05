import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PlayerAttendanceTableComponent } from './player-attendance-table.component';

describe('PlayerAttendanceTableComponent', () => {
  let component: PlayerAttendanceTableComponent;
  let fixture: ComponentFixture<PlayerAttendanceTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlayerAttendanceTableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlayerAttendanceTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
