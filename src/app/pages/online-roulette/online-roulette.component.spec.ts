import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OnlineRouletteComponent } from './online-roulette.component';

describe('OnlineRouletteComponent', () => {
  let component: OnlineRouletteComponent;
  let fixture: ComponentFixture<OnlineRouletteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OnlineRouletteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OnlineRouletteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
