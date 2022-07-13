import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OnlineGamblingTipsComponent } from './online-gambling-tips.component';

describe('OnlineGamblingTipsComponent', () => {
  let component: OnlineGamblingTipsComponent;
  let fixture: ComponentFixture<OnlineGamblingTipsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OnlineGamblingTipsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OnlineGamblingTipsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
