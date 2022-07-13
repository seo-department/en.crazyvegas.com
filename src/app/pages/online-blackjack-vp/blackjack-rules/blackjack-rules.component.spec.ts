import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BlackjackRulesComponent } from './blackjack-rules.component';

describe('BlackjackRulesComponent', () => {
  let component: BlackjackRulesComponent;
  let fixture: ComponentFixture<BlackjackRulesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BlackjackRulesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BlackjackRulesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
