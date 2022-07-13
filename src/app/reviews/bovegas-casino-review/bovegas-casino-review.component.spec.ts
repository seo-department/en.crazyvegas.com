import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BovegasCasinoReviewComponent } from './bovegas-casino-review.component';

describe('BovegasCasinoReviewComponent', () => {
  let component: BovegasCasinoReviewComponent;
  let fixture: ComponentFixture<BovegasCasinoReviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BovegasCasinoReviewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BovegasCasinoReviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
