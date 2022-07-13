import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HighNoonCasinoReviewComponent } from './high-noon-casino-review.component';

describe('HighNoonCasinoReviewComponent', () => {
  let component: HighNoonCasinoReviewComponent;
  let fixture: ComponentFixture<HighNoonCasinoReviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HighNoonCasinoReviewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HighNoonCasinoReviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
