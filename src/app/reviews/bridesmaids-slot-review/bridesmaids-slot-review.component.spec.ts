import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BridesmaidsSlotReviewComponent } from './bridesmaids-slot-review.component';

describe('BridesmaidsSlotReviewComponent', () => {
  let component: BridesmaidsSlotReviewComponent;
  let fixture: ComponentFixture<BridesmaidsSlotReviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BridesmaidsSlotReviewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BridesmaidsSlotReviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
