import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminManageCoachesComponent } from './admin-manage-coaches.component';

describe('AdminManageCoachesComponent', () => {
  let component: AdminManageCoachesComponent;
  let fixture: ComponentFixture<AdminManageCoachesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminManageCoachesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminManageCoachesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
