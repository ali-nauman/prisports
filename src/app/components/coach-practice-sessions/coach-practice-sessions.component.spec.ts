import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CoachPracticeSessionsComponent } from './coach-practice-sessions.component';

describe('CoachPracticeSessionsComponent', () => {
  let component: CoachPracticeSessionsComponent;
  let fixture: ComponentFixture<CoachPracticeSessionsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CoachPracticeSessionsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CoachPracticeSessionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
