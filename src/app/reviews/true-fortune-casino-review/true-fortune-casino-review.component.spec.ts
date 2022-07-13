import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrueFortuneCasinoReviewComponent } from './true-fortune-casino-review.component';

describe('TrueFortuneCasinoReviewComponent', () => {
  let component: TrueFortuneCasinoReviewComponent;
  let fixture: ComponentFixture<TrueFortuneCasinoReviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TrueFortuneCasinoReviewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TrueFortuneCasinoReviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
