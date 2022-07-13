import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CasinoMaxReviewComponent } from './casino-max-review.component';

describe('CasinoMaxReviewComponent', () => {
  let component: CasinoMaxReviewComponent;
  let fixture: ComponentFixture<CasinoMaxReviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CasinoMaxReviewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CasinoMaxReviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
