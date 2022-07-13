import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CryptoReelsCasinoReviewComponent } from './crypto-reels-casino-review.component';

describe('CryptoReelsCasinoReviewComponent', () => {
  let component: CryptoReelsCasinoReviewComponent;
  let fixture: ComponentFixture<CryptoReelsCasinoReviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CryptoReelsCasinoReviewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CryptoReelsCasinoReviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
