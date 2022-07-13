import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BreakDaBankAgainComponent } from './break-da-bank-again.component';

describe('BreakDaBankAgainComponent', () => {
  let component: BreakDaBankAgainComponent;
  let fixture: ComponentFixture<BreakDaBankAgainComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BreakDaBankAgainComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BreakDaBankAgainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
