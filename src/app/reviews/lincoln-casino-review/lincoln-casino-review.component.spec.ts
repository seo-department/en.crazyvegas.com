import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LincolnCasinoReviewComponent } from './lincoln-casino-review.component';

describe('LincolnCasinoReviewComponent', () => {
  let component: LincolnCasinoReviewComponent;
  let fixture: ComponentFixture<LincolnCasinoReviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LincolnCasinoReviewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LincolnCasinoReviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
