import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DoubleBonusVideoPokerComponent } from './double-bonus-video-poker.component';

describe('DoubleBonusVideoPokerComponent', () => {
  let component: DoubleBonusVideoPokerComponent;
  let fixture: ComponentFixture<DoubleBonusVideoPokerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DoubleBonusVideoPokerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DoubleBonusVideoPokerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
