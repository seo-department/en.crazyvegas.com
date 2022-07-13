import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BingoSpiritCasinoReviewComponent } from './bingo-spirit-casino-review.component';

describe('BingoSpiritCasinoReviewComponent', () => {
  let component: BingoSpiritCasinoReviewComponent;
  let fixture: ComponentFixture<BingoSpiritCasinoReviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BingoSpiritCasinoReviewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BingoSpiritCasinoReviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
