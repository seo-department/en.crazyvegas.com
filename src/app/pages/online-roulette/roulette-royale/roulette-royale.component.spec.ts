import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RouletteRoyaleComponent } from './roulette-royale.component';

describe('RouletteRoyaleComponent', () => {
  let component: RouletteRoyaleComponent;
  let fixture: ComponentFixture<RouletteRoyaleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RouletteRoyaleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RouletteRoyaleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
