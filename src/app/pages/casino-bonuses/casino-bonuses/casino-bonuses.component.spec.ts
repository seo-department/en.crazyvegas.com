import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CasinoBonusesComponent } from './casino-bonuses.component';

describe('CasinoBonusesComponent', () => {
  let component: CasinoBonusesComponent;
  let fixture: ComponentFixture<CasinoBonusesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CasinoBonusesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CasinoBonusesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
