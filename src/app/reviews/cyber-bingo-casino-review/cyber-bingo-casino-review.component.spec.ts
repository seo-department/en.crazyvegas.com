import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CyberBingoCasinoReviewComponent } from './cyber-bingo-casino-review.component';

describe('CyberBingoCasinoReviewComponent', () => {
  let component: CyberBingoCasinoReviewComponent;
  let fixture: ComponentFixture<CyberBingoCasinoReviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CyberBingoCasinoReviewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CyberBingoCasinoReviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
