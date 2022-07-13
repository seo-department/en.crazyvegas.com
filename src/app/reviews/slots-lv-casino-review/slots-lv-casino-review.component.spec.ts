import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SlotsLvCasinoReviewComponent } from './slots-lv-casino-review.component';

describe('SlotsLvCasinoReviewComponent', () => {
  let component: SlotsLvCasinoReviewComponent;
  let fixture: ComponentFixture<SlotsLvCasinoReviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SlotsLvCasinoReviewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SlotsLvCasinoReviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
