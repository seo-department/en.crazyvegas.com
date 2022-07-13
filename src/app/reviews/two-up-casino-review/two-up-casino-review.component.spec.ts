import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TwoUpCasinoReviewComponent } from './two-up-casino-review.component';

describe('TwoUpCasinoReviewComponent', () => {
  let component: TwoUpCasinoReviewComponent;
  let fixture: ComponentFixture<TwoUpCasinoReviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TwoUpCasinoReviewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TwoUpCasinoReviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
