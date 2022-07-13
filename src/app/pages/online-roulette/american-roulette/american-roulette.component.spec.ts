import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AmericanRouletteComponent } from './american-roulette.component';

describe('AmericanRouletteComponent', () => {
  let component: AmericanRouletteComponent;
  let fixture: ComponentFixture<AmericanRouletteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AmericanRouletteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AmericanRouletteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
