import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LuckyHippoCasinoReviewComponent } from './lucky-hippo-casino-review.component';

describe('LuckyHippoCasinoReviewComponent', () => {
  let component: LuckyHippoCasinoReviewComponent;
  let fixture: ComponentFixture<LuckyHippoCasinoReviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LuckyHippoCasinoReviewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LuckyHippoCasinoReviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
