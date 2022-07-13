import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PurePlatinumSlotReviewComponent } from './pure-platinum-slot-review.component';

describe('PurePlatinumSlotReviewComponent', () => {
  let component: PurePlatinumSlotReviewComponent;
  let fixture: ComponentFixture<PurePlatinumSlotReviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PurePlatinumSlotReviewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PurePlatinumSlotReviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
