import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MegaMoneyRushSlotReviewComponent } from './mega-money-rush-slot-review.component';

describe('MegaMoneyRushSlotReviewComponent', () => {
  let component: MegaMoneyRushSlotReviewComponent;
  let fixture: ComponentFixture<MegaMoneyRushSlotReviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MegaMoneyRushSlotReviewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MegaMoneyRushSlotReviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
