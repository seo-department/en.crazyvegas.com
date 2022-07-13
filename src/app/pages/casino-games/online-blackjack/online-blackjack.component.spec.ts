import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OnlineBlackjackComponent } from './online-blackjack.component';

describe('OnlineBlackjackComponent', () => {
  let component: OnlineBlackjackComponent;
  let fixture: ComponentFixture<OnlineBlackjackComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OnlineBlackjackComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OnlineBlackjackComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
