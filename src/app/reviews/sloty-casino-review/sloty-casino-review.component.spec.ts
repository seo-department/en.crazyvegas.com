import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SlotyCasinoReviewComponent } from './sloty-casino-review.component';

describe('SlotyCasinoReviewComponent', () => {
  let component: SlotyCasinoReviewComponent;
  let fixture: ComponentFixture<SlotyCasinoReviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SlotyCasinoReviewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SlotyCasinoReviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
