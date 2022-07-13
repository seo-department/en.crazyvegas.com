import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HighCountryCasinoReviewComponent } from './high-country-casino-review.component';

describe('HighCountryCasinoReviewComponent', () => {
  let component: HighCountryCasinoReviewComponent;
  let fixture: ComponentFixture<HighCountryCasinoReviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HighCountryCasinoReviewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HighCountryCasinoReviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
