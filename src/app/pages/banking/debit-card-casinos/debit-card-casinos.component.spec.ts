import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DebitCardCasinosComponent } from './debit-card-casinos.component';

describe('DebitCardCasinosComponent', () => {
  let component: DebitCardCasinosComponent;
  let fixture: ComponentFixture<DebitCardCasinosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DebitCardCasinosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DebitCardCasinosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
