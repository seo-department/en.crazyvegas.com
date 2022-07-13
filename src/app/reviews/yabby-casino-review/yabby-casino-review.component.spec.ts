import { ComponentFixture, TestBed } from '@angular/core/testing';

import { YabbyCasinoReviewComponent } from './yabby-casino-review.component';

describe('YabbyCasinoReviewComponent', () => {
  let component: YabbyCasinoReviewComponent;
  let fixture: ComponentFixture<YabbyCasinoReviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ YabbyCasinoReviewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(YabbyCasinoReviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
