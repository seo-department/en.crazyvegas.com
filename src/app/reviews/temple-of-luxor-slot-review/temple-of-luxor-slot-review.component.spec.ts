import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TempleOfLuxorSlotReviewComponent } from './temple-of-luxor-slot-review.component';

describe('TempleOfLuxorSlotReviewComponent', () => {
  let component: TempleOfLuxorSlotReviewComponent;
  let fixture: ComponentFixture<TempleOfLuxorSlotReviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TempleOfLuxorSlotReviewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TempleOfLuxorSlotReviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
