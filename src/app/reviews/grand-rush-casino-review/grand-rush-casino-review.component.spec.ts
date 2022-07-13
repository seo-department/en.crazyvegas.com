import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GrandRushCasinoReviewComponent } from './grand-rush-casino-review.component';

describe('GrandRushCasinoReviewComponent', () => {
  let component: GrandRushCasinoReviewComponent;
  let fixture: ComponentFixture<GrandRushCasinoReviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GrandRushCasinoReviewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GrandRushCasinoReviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
