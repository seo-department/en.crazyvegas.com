import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OnlineVideoPokerComponent } from './online-video-poker.component';

describe('OnlineVideoPokerComponent', () => {
  let component: OnlineVideoPokerComponent;
  let fixture: ComponentFixture<OnlineVideoPokerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OnlineVideoPokerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OnlineVideoPokerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
