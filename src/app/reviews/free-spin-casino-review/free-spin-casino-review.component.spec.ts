import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FreeSpinCasinoReviewComponent } from './free-spin-casino-review.component';

describe('FreeSpinCasinoReviewComponent', () => {
  let component: FreeSpinCasinoReviewComponent;
  let fixture: ComponentFixture<FreeSpinCasinoReviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FreeSpinCasinoReviewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FreeSpinCasinoReviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
