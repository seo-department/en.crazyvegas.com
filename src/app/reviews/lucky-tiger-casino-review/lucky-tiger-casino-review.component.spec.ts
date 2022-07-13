import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LuckyTigerCasinoReviewComponent } from './lucky-tiger-casino-review.component';

describe('LuckyTigerCasinoReviewComponent', () => {
  let component: LuckyTigerCasinoReviewComponent;
  let fixture: ComponentFixture<LuckyTigerCasinoReviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LuckyTigerCasinoReviewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LuckyTigerCasinoReviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
