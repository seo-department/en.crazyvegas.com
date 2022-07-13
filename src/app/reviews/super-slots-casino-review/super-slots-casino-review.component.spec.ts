import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SuperSlotsCasinoReviewComponent } from './super-slots-casino-review.component';

describe('SuperSlotsCasinoReviewComponent', () => {
  let component: SuperSlotsCasinoReviewComponent;
  let fixture: ComponentFixture<SuperSlotsCasinoReviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SuperSlotsCasinoReviewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SuperSlotsCasinoReviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
