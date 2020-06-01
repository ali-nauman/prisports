import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminManagePlayersComponent } from './admin-manage-players.component';

describe('AdminManagePlayersComponent', () => {
  let component: AdminManagePlayersComponent;
  let fixture: ComponentFixture<AdminManagePlayersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminManagePlayersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminManagePlayersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
