import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BetusCasinoReviewComponent } from './betus-casino-review.component';

describe('BetusCasinoReviewComponent', () => {
  let component: BetusCasinoReviewComponent;
  let fixture: ComponentFixture<BetusCasinoReviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BetusCasinoReviewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BetusCasinoReviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
