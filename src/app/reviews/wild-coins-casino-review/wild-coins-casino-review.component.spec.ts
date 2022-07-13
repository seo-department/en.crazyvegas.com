import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WildCoinsCasinoReviewComponent } from './wild-coins-casino-review.component';

describe('WildCoinsCasinoReviewComponent', () => {
  let component: WildCoinsCasinoReviewComponent;
  let fixture: ComponentFixture<WildCoinsCasinoReviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WildCoinsCasinoReviewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WildCoinsCasinoReviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
