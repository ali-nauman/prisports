import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PlayerPracticeSessionsComponent } from './player-practice-sessions.component';

describe('PlayerPracticeSessionsComponent', () => {
  let component: PlayerPracticeSessionsComponent;
  let fixture: ComponentFixture<PlayerPracticeSessionsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlayerPracticeSessionsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlayerPracticeSessionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
