import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FrenchRouletteComponent } from './french-roulette.component';

describe('FrenchRouletteComponent', () => {
  let component: FrenchRouletteComponent;
  let fixture: ComponentFixture<FrenchRouletteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FrenchRouletteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FrenchRouletteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
