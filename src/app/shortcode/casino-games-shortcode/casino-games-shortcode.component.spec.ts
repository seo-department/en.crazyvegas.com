import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CasinoGamesShortcodeComponent } from './casino-games-shortcode.component';

describe('CasinoGamesShortcodeComponent', () => {
  let component: CasinoGamesShortcodeComponent;
  let fixture: ComponentFixture<CasinoGamesShortcodeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CasinoGamesShortcodeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CasinoGamesShortcodeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
