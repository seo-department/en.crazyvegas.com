import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MultiPlayerRouletteComponent } from './multi-player-roulette.component';

describe('MultiPlayerRouletteComponent', () => {
  let component: MultiPlayerRouletteComponent;
  let fixture: ComponentFixture<MultiPlayerRouletteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MultiPlayerRouletteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MultiPlayerRouletteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
