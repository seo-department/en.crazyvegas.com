import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SunnyCasinoReviewComponent } from './sunny-casino-review.component';

describe('SunnyCasinoReviewComponent', () => {
  let component: SunnyCasinoReviewComponent;
  let fixture: ComponentFixture<SunnyCasinoReviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SunnyCasinoReviewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SunnyCasinoReviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
