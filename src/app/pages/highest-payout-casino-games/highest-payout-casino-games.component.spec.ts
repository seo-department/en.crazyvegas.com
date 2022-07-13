import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HighestPayoutCasinoGamesComponent } from './highest-payout-casino-games.component';

describe('HighestPayoutCasinoGamesComponent', () => {
  let component: HighestPayoutCasinoGamesComponent;
  let fixture: ComponentFixture<HighestPayoutCasinoGamesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HighestPayoutCasinoGamesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HighestPayoutCasinoGamesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
