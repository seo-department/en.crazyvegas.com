import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BlackjackStrategyComponent } from './blackjack-strategy.component';

describe('BlackjackStrategyComponent', () => {
  let component: BlackjackStrategyComponent;
  let fixture: ComponentFixture<BlackjackStrategyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BlackjackStrategyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BlackjackStrategyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
