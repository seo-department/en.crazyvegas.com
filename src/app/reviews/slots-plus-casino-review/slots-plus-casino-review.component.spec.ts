import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SlotsPlusCasinoReviewComponent } from './slots-plus-casino-review.component';

describe('SlotsPlusCasinoReviewComponent', () => {
  let component: SlotsPlusCasinoReviewComponent;
  let fixture: ComponentFixture<SlotsPlusCasinoReviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SlotsPlusCasinoReviewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SlotsPlusCasinoReviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
