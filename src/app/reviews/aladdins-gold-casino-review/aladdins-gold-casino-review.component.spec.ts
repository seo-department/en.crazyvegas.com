import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AladdinsGoldCasinoReviewComponent } from './aladdins-gold-casino-review.component';

describe('AladdinsGoldCasinoReviewComponent', () => {
  let component: AladdinsGoldCasinoReviewComponent;
  let fixture: ComponentFixture<AladdinsGoldCasinoReviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AladdinsGoldCasinoReviewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AladdinsGoldCasinoReviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
