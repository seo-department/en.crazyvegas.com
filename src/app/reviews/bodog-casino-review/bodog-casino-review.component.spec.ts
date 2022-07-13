import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BodogCasinoReviewComponent } from './bodog-casino-review.component';

describe('BodogCasinoReviewComponent', () => {
  let component: BodogCasinoReviewComponent;
  let fixture: ComponentFixture<BodogCasinoReviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BodogCasinoReviewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BodogCasinoReviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
