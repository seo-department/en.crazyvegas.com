import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LibertySlotsCasinoReviewComponent } from './liberty-slots-casino-review.component';

describe('LibertySlotsCasinoReviewComponent', () => {
  let component: LibertySlotsCasinoReviewComponent;
  let fixture: ComponentFixture<LibertySlotsCasinoReviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LibertySlotsCasinoReviewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LibertySlotsCasinoReviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
