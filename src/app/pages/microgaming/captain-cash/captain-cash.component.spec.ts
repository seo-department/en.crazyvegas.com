import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CaptainCashComponent } from './captain-cash.component';

describe('CaptainCashComponent', () => {
  let component: CaptainCashComponent;
  let fixture: ComponentFixture<CaptainCashComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CaptainCashComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CaptainCashComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
