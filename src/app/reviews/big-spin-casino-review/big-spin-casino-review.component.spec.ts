import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BigSpinCasinoReviewComponent } from './big-spin-casino-review.component';

describe('BigSpinCasinoReviewComponent', () => {
  let component: BigSpinCasinoReviewComponent;
  let fixture: ComponentFixture<BigSpinCasinoReviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BigSpinCasinoReviewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BigSpinCasinoReviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
