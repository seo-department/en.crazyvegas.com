import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PremierRouletteComponent } from './premier-roulette.component';

describe('PremierRouletteComponent', () => {
  let component: PremierRouletteComponent;
  let fixture: ComponentFixture<PremierRouletteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PremierRouletteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PremierRouletteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
