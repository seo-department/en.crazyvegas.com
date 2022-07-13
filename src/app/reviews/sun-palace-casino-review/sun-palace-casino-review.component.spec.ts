import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SunPalaceCasinoReviewComponent } from './sun-palace-casino-review.component';

describe('SunPalaceCasinoReviewComponent', () => {
  let component: SunPalaceCasinoReviewComponent;
  let fixture: ComponentFixture<SunPalaceCasinoReviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SunPalaceCasinoReviewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SunPalaceCasinoReviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
