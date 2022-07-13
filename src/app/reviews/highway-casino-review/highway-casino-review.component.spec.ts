import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HighwayCasinoReviewComponent } from './highway-casino-review.component';

describe('HighwayCasinoReviewComponent', () => {
  let component: HighwayCasinoReviewComponent;
  let fixture: ComponentFixture<HighwayCasinoReviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HighwayCasinoReviewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HighwayCasinoReviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
