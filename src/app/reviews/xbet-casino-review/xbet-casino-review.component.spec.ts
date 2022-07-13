import { ComponentFixture, TestBed } from '@angular/core/testing';

import { XbetCasinoReviewComponent } from './xbet-casino-review.component';

describe('XbetCasinoReviewComponent', () => {
  let component: XbetCasinoReviewComponent;
  let fixture: ComponentFixture<XbetCasinoReviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ XbetCasinoReviewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(XbetCasinoReviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
