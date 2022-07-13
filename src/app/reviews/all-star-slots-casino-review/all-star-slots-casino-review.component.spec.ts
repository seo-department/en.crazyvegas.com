import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllStarSlotsCasinoReviewComponent } from './all-star-slots-casino-review.component';

describe('AllStarSlotsCasinoReviewComponent', () => {
  let component: AllStarSlotsCasinoReviewComponent;
  let fixture: ComponentFixture<AllStarSlotsCasinoReviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AllStarSlotsCasinoReviewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AllStarSlotsCasinoReviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
