import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SportsAndCasinoReviewComponent } from './sports-and-casino-review.component';

describe('SportsAndCasinoReviewComponent', () => {
  let component: SportsAndCasinoReviewComponent;
  let fixture: ComponentFixture<SportsAndCasinoReviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SportsAndCasinoReviewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SportsAndCasinoReviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
