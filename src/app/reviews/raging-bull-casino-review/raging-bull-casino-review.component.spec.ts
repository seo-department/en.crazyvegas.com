import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RagingBullCasinoReviewComponent } from './raging-bull-casino-review.component';

describe('RagingBullCasinoReviewComponent', () => {
  let component: RagingBullCasinoReviewComponent;
  let fixture: ComponentFixture<RagingBullCasinoReviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RagingBullCasinoReviewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RagingBullCasinoReviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
