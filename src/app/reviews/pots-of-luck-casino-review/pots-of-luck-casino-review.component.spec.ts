import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PotsOfLuckCasinoReviewComponent } from './pots-of-luck-casino-review.component';

describe('PotsOfLuckCasinoReviewComponent', () => {
  let component: PotsOfLuckCasinoReviewComponent;
  let fixture: ComponentFixture<PotsOfLuckCasinoReviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PotsOfLuckCasinoReviewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PotsOfLuckCasinoReviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
