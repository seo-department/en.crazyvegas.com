import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CasinoExtremeReviewComponent } from './casino-extreme-review.component';

describe('CasinoExtremeReviewComponent', () => {
  let component: CasinoExtremeReviewComponent;
  let fixture: ComponentFixture<CasinoExtremeReviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CasinoExtremeReviewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CasinoExtremeReviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
