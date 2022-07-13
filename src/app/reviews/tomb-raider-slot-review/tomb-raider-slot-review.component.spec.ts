import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TombRaiderSlotReviewComponent } from './tomb-raider-slot-review.component';

describe('TombRaiderSlotReviewComponent', () => {
  let component: TombRaiderSlotReviewComponent;
  let fixture: ComponentFixture<TombRaiderSlotReviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TombRaiderSlotReviewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TombRaiderSlotReviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
