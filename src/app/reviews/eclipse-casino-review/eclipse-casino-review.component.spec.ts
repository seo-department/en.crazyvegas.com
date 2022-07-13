import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EclipseCasinoReviewComponent } from './eclipse-casino-review.component';

describe('EclipseCasinoReviewComponent', () => {
  let component: EclipseCasinoReviewComponent;
  let fixture: ComponentFixture<EclipseCasinoReviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EclipseCasinoReviewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EclipseCasinoReviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
