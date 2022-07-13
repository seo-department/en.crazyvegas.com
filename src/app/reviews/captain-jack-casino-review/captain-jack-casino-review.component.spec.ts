import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CaptainJackCasinoReviewComponent } from './captain-jack-casino-review.component';

describe('CaptainJackCasinoReviewComponent', () => {
  let component: CaptainJackCasinoReviewComponent;
  let fixture: ComponentFixture<CaptainJackCasinoReviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CaptainJackCasinoReviewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CaptainJackCasinoReviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
