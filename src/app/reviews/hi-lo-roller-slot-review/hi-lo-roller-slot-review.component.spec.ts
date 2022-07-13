import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HiLoRollerSlotReviewComponent } from './hi-lo-roller-slot-review.component';

describe('HiLoRollerSlotReviewComponent', () => {
  let component: HiLoRollerSlotReviewComponent;
  let fixture: ComponentFixture<HiLoRollerSlotReviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HiLoRollerSlotReviewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HiLoRollerSlotReviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
