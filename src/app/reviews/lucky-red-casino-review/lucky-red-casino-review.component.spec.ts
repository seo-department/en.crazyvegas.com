import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LuckyRedCasinoReviewComponent } from './lucky-red-casino-review.component';

describe('LuckyRedCasinoReviewComponent', () => {
  let component: LuckyRedCasinoReviewComponent;
  let fixture: ComponentFixture<LuckyRedCasinoReviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LuckyRedCasinoReviewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LuckyRedCasinoReviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
