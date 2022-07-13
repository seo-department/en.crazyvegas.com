import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OnlinePokerComponent } from './online-poker.component';

describe('OnlinePokerComponent', () => {
  let component: OnlinePokerComponent;
  let fixture: ComponentFixture<OnlinePokerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OnlinePokerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OnlinePokerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
