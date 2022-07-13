import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SpinfinityCasinoReviewComponent } from './spinfinity-casino-review.component';

describe('SpinfinityCasinoReviewComponent', () => {
  let component: SpinfinityCasinoReviewComponent;
  let fixture: ComponentFixture<SpinfinityCasinoReviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SpinfinityCasinoReviewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SpinfinityCasinoReviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
