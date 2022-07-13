import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AussiePlayCasinoReviewComponent } from './aussie-play-casino-review.component';

describe('AussiePlayCasinoReviewComponent', () => {
  let component: AussiePlayCasinoReviewComponent;
  let fixture: ComponentFixture<AussiePlayCasinoReviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AussiePlayCasinoReviewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AussiePlayCasinoReviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
