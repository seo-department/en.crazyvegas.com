import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BusrCasinoReviewComponent } from './busr-casino-review.component';

describe('BusrCasinoReviewComponent', () => {
  let component: BusrCasinoReviewComponent;
  let fixture: ComponentFixture<BusrCasinoReviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BusrCasinoReviewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BusrCasinoReviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
