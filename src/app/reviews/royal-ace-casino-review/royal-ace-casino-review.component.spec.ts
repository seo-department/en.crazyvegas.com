import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RoyalAceCasinoReviewComponent } from './royal-ace-casino-review.component';

describe('RoyalAceCasinoReviewComponent', () => {
  let component: RoyalAceCasinoReviewComponent;
  let fixture: ComponentFixture<RoyalAceCasinoReviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RoyalAceCasinoReviewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RoyalAceCasinoReviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
