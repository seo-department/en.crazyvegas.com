import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SportsBettingCasinoReviewComponent } from './sports-betting-casino-review.component';

describe('SportsBettingCasinoReviewComponent', () => {
  let component: SportsBettingCasinoReviewComponent;
  let fixture: ComponentFixture<SportsBettingCasinoReviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SportsBettingCasinoReviewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SportsBettingCasinoReviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
