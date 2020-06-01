import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminGenerateSchedulesComponent } from './admin-generate-schedules.component';

describe('AdminGenerateSchedulesComponent', () => {
  let component: AdminGenerateSchedulesComponent;
  let fixture: ComponentFixture<AdminGenerateSchedulesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminGenerateSchedulesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminGenerateSchedulesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
