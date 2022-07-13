import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmoticoinsSlotReviewComponent } from './emoticoins-slot-review.component';

describe('EmoticoinsSlotReviewComponent', () => {
  let component: EmoticoinsSlotReviewComponent;
  let fixture: ComponentFixture<EmoticoinsSlotReviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmoticoinsSlotReviewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EmoticoinsSlotReviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
