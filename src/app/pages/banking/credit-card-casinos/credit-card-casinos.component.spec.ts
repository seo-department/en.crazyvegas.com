import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreditCardCasinosComponent } from './credit-card-casinos.component';

describe('CreditCardCasinosComponent', () => {
  let component: CreditCardCasinosComponent;
  let fixture: ComponentFixture<CreditCardCasinosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreditCardCasinosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreditCardCasinosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
