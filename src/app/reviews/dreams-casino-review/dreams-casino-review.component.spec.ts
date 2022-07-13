import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DreamsCasinoReviewComponent } from './dreams-casino-review.component';

describe('DreamsCasinoReviewComponent', () => {
  let component: DreamsCasinoReviewComponent;
  let fixture: ComponentFixture<DreamsCasinoReviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DreamsCasinoReviewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DreamsCasinoReviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
