import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SuperiorCasinoReviewComponent } from './superior-casino-review.component';

describe('SuperiorCasinoReviewComponent', () => {
  let component: SuperiorCasinoReviewComponent;
  let fixture: ComponentFixture<SuperiorCasinoReviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SuperiorCasinoReviewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SuperiorCasinoReviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
