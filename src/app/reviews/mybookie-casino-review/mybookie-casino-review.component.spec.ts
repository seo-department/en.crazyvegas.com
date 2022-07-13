import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MybookieCasinoReviewComponent } from './mybookie-casino-review.component';

describe('MybookieCasinoReviewComponent', () => {
  let component: MybookieCasinoReviewComponent;
  let fixture: ComponentFixture<MybookieCasinoReviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MybookieCasinoReviewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MybookieCasinoReviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
