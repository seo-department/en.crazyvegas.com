import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BetOnlineCasinoReviewComponent } from './bet-online-casino-review.component';

describe('BetOnlineCasinoReviewComponent', () => {
  let component: BetOnlineCasinoReviewComponent;
  let fixture: ComponentFixture<BetOnlineCasinoReviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BetOnlineCasinoReviewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BetOnlineCasinoReviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
