import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CasinoMateCasinoReviewComponent } from './casino-mate-casino-review.component';

describe('CasinoMateCasinoReviewComponent', () => {
  let component: CasinoMateCasinoReviewComponent;
  let fixture: ComponentFixture<CasinoMateCasinoReviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CasinoMateCasinoReviewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CasinoMateCasinoReviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
