import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CherryGoldCasinoReviewComponent } from './cherry-gold-casino-review.component';

describe('CherryGoldCasinoReviewComponent', () => {
  let component: CherryGoldCasinoReviewComponent;
  let fixture: ComponentFixture<CherryGoldCasinoReviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CherryGoldCasinoReviewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CherryGoldCasinoReviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
