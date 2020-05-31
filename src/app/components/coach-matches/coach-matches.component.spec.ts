import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CoachMatchesComponent } from './coach-matches.component';

describe('CoachMatchesComponent', () => {
  let component: CoachMatchesComponent;
  let fixture: ComponentFixture<CoachMatchesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CoachMatchesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CoachMatchesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
