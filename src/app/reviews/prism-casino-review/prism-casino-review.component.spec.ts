import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrismCasinoReviewComponent } from './prism-casino-review.component';

describe('PrismCasinoReviewComponent', () => {
  let component: PrismCasinoReviewComponent;
  let fixture: ComponentFixture<PrismCasinoReviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PrismCasinoReviewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PrismCasinoReviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
