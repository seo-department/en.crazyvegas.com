import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DoubleDoubleBonusVideoPokerComponent } from './double-double-bonus-video-poker.component';

describe('DoubleDoubleBonusVideoPokerComponent', () => {
  let component: DoubleDoubleBonusVideoPokerComponent;
  let fixture: ComponentFixture<DoubleDoubleBonusVideoPokerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DoubleDoubleBonusVideoPokerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DoubleDoubleBonusVideoPokerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
