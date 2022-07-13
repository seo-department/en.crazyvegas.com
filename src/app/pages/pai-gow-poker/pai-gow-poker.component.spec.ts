import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaiGowPokerComponent } from './pai-gow-poker.component';

describe('PaiGowPokerComponent', () => {
  let component: PaiGowPokerComponent;
  let fixture: ComponentFixture<PaiGowPokerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PaiGowPokerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PaiGowPokerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
