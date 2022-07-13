import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NoDepositBonusComponent } from './no-deposit-bonus.component';

describe('NoDepositBonusComponent', () => {
  let component: NoDepositBonusComponent;
  let fixture: ComponentFixture<NoDepositBonusComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NoDepositBonusComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NoDepositBonusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
