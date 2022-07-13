import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BuzzluckCasinoReviewComponent } from './buzzluck-casino-review.component';

describe('BuzzluckCasinoReviewComponent', () => {
  let component: BuzzluckCasinoReviewComponent;
  let fixture: ComponentFixture<BuzzluckCasinoReviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BuzzluckCasinoReviewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BuzzluckCasinoReviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
