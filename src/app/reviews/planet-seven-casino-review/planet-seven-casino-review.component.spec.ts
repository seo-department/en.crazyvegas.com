import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlanetSevenCasinoReviewComponent } from './planet-seven-casino-review.component';

describe('PlanetSevenCasinoReviewComponent', () => {
  let component: PlanetSevenCasinoReviewComponent;
  let fixture: ComponentFixture<PlanetSevenCasinoReviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PlanetSevenCasinoReviewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PlanetSevenCasinoReviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
