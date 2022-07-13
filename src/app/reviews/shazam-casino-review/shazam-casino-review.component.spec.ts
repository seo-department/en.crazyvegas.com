import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShazamCasinoReviewComponent } from './shazam-casino-review.component';

describe('ShazamCasinoReviewComponent', () => {
  let component: ShazamCasinoReviewComponent;
  let fixture: ComponentFixture<ShazamCasinoReviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShazamCasinoReviewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShazamCasinoReviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
