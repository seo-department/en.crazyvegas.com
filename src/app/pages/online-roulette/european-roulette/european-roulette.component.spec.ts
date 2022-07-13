import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EuropeanRouletteComponent } from './european-roulette.component';

describe('EuropeanRouletteComponent', () => {
  let component: EuropeanRouletteComponent;
  let fixture: ComponentFixture<EuropeanRouletteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EuropeanRouletteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EuropeanRouletteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
