import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SlotsOfVegasCasinoReviewComponent } from './slots-of-vegas-casino-review.component';

describe('SlotsOfVegasCasinoReviewComponent', () => {
  let component: SlotsOfVegasCasinoReviewComponent;
  let fixture: ComponentFixture<SlotsOfVegasCasinoReviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SlotsOfVegasCasinoReviewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SlotsOfVegasCasinoReviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
