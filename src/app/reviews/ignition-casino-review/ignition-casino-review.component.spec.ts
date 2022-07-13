import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IgnitionCasinoReviewComponent } from './ignition-casino-review.component';

describe('IgnitionCasinoReviewComponent', () => {
  let component: IgnitionCasinoReviewComponent;
  let fixture: ComponentFixture<IgnitionCasinoReviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IgnitionCasinoReviewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IgnitionCasinoReviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
