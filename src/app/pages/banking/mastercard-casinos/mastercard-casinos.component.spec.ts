import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MastercardCasinosComponent } from './mastercard-casinos.component';

describe('MastercardCasinosComponent', () => {
  let component: MastercardCasinosComponent;
  let fixture: ComponentFixture<MastercardCasinosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MastercardCasinosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MastercardCasinosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
