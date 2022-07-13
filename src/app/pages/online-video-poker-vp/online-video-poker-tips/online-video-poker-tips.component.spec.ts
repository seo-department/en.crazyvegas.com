import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OnlineVideoPokerTipsComponent } from './online-video-poker-tips.component';

describe('OnlineVideoPokerTipsComponent', () => {
  let component: OnlineVideoPokerTipsComponent;
  let fixture: ComponentFixture<OnlineVideoPokerTipsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OnlineVideoPokerTipsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OnlineVideoPokerTipsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
