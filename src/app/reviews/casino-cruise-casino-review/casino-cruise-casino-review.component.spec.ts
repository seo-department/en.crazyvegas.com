import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CasinoCruiseCasinoReviewComponent } from './casino-cruise-casino-review.component';

describe('CasinoCruiseCasinoReviewComponent', () => {
  let component: CasinoCruiseCasinoReviewComponent;
  let fixture: ComponentFixture<CasinoCruiseCasinoReviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CasinoCruiseCasinoReviewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CasinoCruiseCasinoReviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
