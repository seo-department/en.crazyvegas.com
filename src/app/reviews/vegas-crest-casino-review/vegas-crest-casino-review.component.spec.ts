import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VegasCrestCasinoReviewComponent } from './vegas-crest-casino-review.component';

describe('VegasCrestCasinoReviewComponent', () => {
  let component: VegasCrestCasinoReviewComponent;
  let fixture: ComponentFixture<VegasCrestCasinoReviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VegasCrestCasinoReviewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VegasCrestCasinoReviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
