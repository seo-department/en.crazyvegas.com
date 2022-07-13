import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WinAtBlackjackComponent } from './win-at-blackjack.component';

describe('WinAtBlackjackComponent', () => {
  let component: WinAtBlackjackComponent;
  let fixture: ComponentFixture<WinAtBlackjackComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WinAtBlackjackComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WinAtBlackjackComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
