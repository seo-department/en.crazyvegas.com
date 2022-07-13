import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FreeCasinoGamesComponent } from './free-casino-games.component';

describe('FreeCasinoGamesComponent', () => {
  let component: FreeCasinoGamesComponent;
  let fixture: ComponentFixture<FreeCasinoGamesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FreeCasinoGamesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FreeCasinoGamesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
