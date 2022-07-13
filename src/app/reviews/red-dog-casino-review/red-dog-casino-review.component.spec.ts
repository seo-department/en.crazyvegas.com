import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RedDogCasinoReviewComponent } from './red-dog-casino-review.component';

describe('RedDogCasinoReviewComponent', () => {
  let component: RedDogCasinoReviewComponent;
  let fixture: ComponentFixture<RedDogCasinoReviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RedDogCasinoReviewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RedDogCasinoReviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
