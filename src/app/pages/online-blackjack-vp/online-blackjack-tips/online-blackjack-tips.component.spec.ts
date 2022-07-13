import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OnlineBlackjackTipsComponent } from './online-blackjack-tips.component';

describe('OnlineBlackjackTipsComponent', () => {
  let component: OnlineBlackjackTipsComponent;
  let fixture: ComponentFixture<OnlineBlackjackTipsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OnlineBlackjackTipsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OnlineBlackjackTipsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
