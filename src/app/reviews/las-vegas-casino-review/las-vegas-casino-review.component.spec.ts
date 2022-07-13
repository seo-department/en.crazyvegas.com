import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LasVegasCasinoReviewComponent } from './las-vegas-casino-review.component';

describe('LasVegasCasinoReviewComponent', () => {
  let component: LasVegasCasinoReviewComponent;
  let fixture: ComponentFixture<LasVegasCasinoReviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LasVegasCasinoReviewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LasVegasCasinoReviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
