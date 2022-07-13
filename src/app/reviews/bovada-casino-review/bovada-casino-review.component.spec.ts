import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BovadaCasinoReviewComponent } from './bovada-casino-review.component';

describe('BovadaCasinoReviewComponent', () => {
  let component: BovadaCasinoReviewComponent;
  let fixture: ComponentFixture<BovadaCasinoReviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BovadaCasinoReviewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BovadaCasinoReviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
