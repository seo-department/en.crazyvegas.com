import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TwentyFourVipCasinoReviewComponent } from './twenty-four-vip-casino-review.component';

describe('TwentyFourVipCasinoReviewComponent', () => {
  let component: TwentyFourVipCasinoReviewComponent;
  let fixture: ComponentFixture<TwentyFourVipCasinoReviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TwentyFourVipCasinoReviewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TwentyFourVipCasinoReviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
