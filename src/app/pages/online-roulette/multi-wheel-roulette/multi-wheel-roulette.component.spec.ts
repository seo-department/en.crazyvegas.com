import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MultiWheelRouletteComponent } from './multi-wheel-roulette.component';

describe('MultiWheelRouletteComponent', () => {
  let component: MultiWheelRouletteComponent;
  let fixture: ComponentFixture<MultiWheelRouletteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MultiWheelRouletteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MultiWheelRouletteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
