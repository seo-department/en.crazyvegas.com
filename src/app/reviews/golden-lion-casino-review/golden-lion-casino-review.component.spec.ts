import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GoldenLionCasinoReviewComponent } from './golden-lion-casino-review.component';

describe('GoldenLionCasinoReviewComponent', () => {
  let component: GoldenLionCasinoReviewComponent;
  let fixture: ComponentFixture<GoldenLionCasinoReviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GoldenLionCasinoReviewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GoldenLionCasinoReviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
