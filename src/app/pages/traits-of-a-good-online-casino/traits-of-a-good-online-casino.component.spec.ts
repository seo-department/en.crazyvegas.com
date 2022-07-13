import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TraitsOfAGoodOnlineCasinoComponent } from './traits-of-a-good-online-casino.component';

describe('TraitsOfAGoodOnlineCasinoComponent', () => {
  let component: TraitsOfAGoodOnlineCasinoComponent;
  let fixture: ComponentFixture<TraitsOfAGoodOnlineCasinoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TraitsOfAGoodOnlineCasinoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TraitsOfAGoodOnlineCasinoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
