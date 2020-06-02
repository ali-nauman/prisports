import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminUpdatePlayerComponent } from './admin-update-player.component';

describe('AdminUpdatePlayerComponent', () => {
  let component: AdminUpdatePlayerComponent;
  let fixture: ComponentFixture<AdminUpdatePlayerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminUpdatePlayerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminUpdatePlayerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
