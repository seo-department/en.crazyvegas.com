import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BitcoinCasinosComponent } from './bitcoin-casinos.component';

describe('BitcoinCasinosComponent', () => {
  let component: BitcoinCasinosComponent;
  let fixture: ComponentFixture<BitcoinCasinosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BitcoinCasinosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BitcoinCasinosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
