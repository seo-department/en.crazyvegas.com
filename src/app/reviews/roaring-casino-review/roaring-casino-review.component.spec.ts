import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RoaringCasinoReviewComponent } from './roaring-casino-review.component';

describe('RoaringCasinoReviewComponent', () => {
  let component: RoaringCasinoReviewComponent;
  let fixture: ComponentFixture<RoaringCasinoReviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RoaringCasinoReviewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RoaringCasinoReviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
