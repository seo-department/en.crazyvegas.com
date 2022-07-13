import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WildCardCityCasinoReviewComponent } from './wild-card-city-casino-review.component';

describe('WildCardCityCasinoReviewComponent', () => {
  let component: WildCardCityCasinoReviewComponent;
  let fixture: ComponentFixture<WildCardCityCasinoReviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WildCardCityCasinoReviewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WildCardCityCasinoReviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
