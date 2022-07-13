import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BrangoCasinoReviewComponent } from './brango-casino-review.component';

describe('BrangoCasinoReviewComponent', () => {
  let component: BrangoCasinoReviewComponent;
  let fixture: ComponentFixture<BrangoCasinoReviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BrangoCasinoReviewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BrangoCasinoReviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
