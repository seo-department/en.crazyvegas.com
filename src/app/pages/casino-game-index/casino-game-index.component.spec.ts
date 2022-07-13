import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CasinoGameIndexComponent } from './casino-game-index.component';

describe('CasinoGameIndexComponent', () => {
  let component: CasinoGameIndexComponent;
  let fixture: ComponentFixture<CasinoGameIndexComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CasinoGameIndexComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CasinoGameIndexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
