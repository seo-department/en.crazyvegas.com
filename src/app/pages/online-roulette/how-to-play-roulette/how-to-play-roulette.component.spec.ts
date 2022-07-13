import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HowToPlayRouletteComponent } from './how-to-play-roulette.component';

describe('HowToPlayRouletteComponent', () => {
  let component: HowToPlayRouletteComponent;
  let fixture: ComponentFixture<HowToPlayRouletteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HowToPlayRouletteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HowToPlayRouletteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
