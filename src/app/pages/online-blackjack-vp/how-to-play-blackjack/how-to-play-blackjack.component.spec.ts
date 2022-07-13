import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HowToPlayBlackjackComponent } from './how-to-play-blackjack.component';

describe('HowToPlayBlackjackComponent', () => {
  let component: HowToPlayBlackjackComponent;
  let fixture: ComponentFixture<HowToPlayBlackjackComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HowToPlayBlackjackComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HowToPlayBlackjackComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
