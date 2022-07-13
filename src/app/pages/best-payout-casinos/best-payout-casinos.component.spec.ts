import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BestPayoutCasinosComponent } from './best-payout-casinos.component';

describe('BestPayoutCasinosComponent', () => {
  let component: BestPayoutCasinosComponent;
  let fixture: ComponentFixture<BestPayoutCasinosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BestPayoutCasinosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BestPayoutCasinosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
