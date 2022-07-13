import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CafeCasinoReviewComponent } from './cafe-casino-review.component';

describe('CafeCasinoReviewComponent', () => {
  let component: CafeCasinoReviewComponent;
  let fixture: ComponentFixture<CafeCasinoReviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CafeCasinoReviewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CafeCasinoReviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
