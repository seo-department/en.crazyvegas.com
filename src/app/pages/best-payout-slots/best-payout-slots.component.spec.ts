import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BestPayoutSlotsComponent } from './best-payout-slots.component';

describe('BestPayoutSlotsComponent', () => {
  let component: BestPayoutSlotsComponent;
  let fixture: ComponentFixture<BestPayoutSlotsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BestPayoutSlotsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BestPayoutSlotsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
