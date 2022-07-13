import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SlotMadnessCasinoReviewComponent } from './slot-madness-casino-review.component';

describe('SlotMadnessCasinoReviewComponent', () => {
  let component: SlotMadnessCasinoReviewComponent;
  let fixture: ComponentFixture<SlotMadnessCasinoReviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SlotMadnessCasinoReviewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SlotMadnessCasinoReviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
