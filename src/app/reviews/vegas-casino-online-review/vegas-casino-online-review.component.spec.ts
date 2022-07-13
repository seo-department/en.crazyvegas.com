import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VegasCasinoOnlineReviewComponent } from './vegas-casino-online-review.component';

describe('VegasCasinoOnlineReviewComponent', () => {
  let component: VegasCasinoOnlineReviewComponent;
  let fixture: ComponentFixture<VegasCasinoOnlineReviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VegasCasinoOnlineReviewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VegasCasinoOnlineReviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
