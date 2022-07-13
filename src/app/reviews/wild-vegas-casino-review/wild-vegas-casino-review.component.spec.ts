import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WildVegasCasinoReviewComponent } from './wild-vegas-casino-review.component';

describe('WildVegasCasinoReviewComponent', () => {
  let component: WildVegasCasinoReviewComponent;
  let fixture: ComponentFixture<WildVegasCasinoReviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WildVegasCasinoReviewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WildVegasCasinoReviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
