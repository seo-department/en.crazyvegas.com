import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BingoFestCasinoReviewComponent } from './bingo-fest-casino-review.component';

describe('BingoFestCasinoReviewComponent', () => {
  let component: BingoFestCasinoReviewComponent;
  let fixture: ComponentFixture<BingoFestCasinoReviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BingoFestCasinoReviewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BingoFestCasinoReviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
