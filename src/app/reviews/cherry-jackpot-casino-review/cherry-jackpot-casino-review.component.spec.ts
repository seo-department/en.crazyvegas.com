import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CherryJackpotCasinoReviewComponent } from './cherry-jackpot-casino-review.component';

describe('CherryJackpotCasinoReviewComponent', () => {
  let component: CherryJackpotCasinoReviewComponent;
  let fixture: ComponentFixture<CherryJackpotCasinoReviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CherryJackpotCasinoReviewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CherryJackpotCasinoReviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
