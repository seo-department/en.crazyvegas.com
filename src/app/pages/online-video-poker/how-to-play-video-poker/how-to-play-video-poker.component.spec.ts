import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HowToPlayVideoPokerComponent } from './how-to-play-video-poker.component';

describe('HowToPlayVideoPokerComponent', () => {
  let component: HowToPlayVideoPokerComponent;
  let fixture: ComponentFixture<HowToPlayVideoPokerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HowToPlayVideoPokerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HowToPlayVideoPokerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
