import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RealMoneyCasinosComponent } from './real-money-casinos.component';

describe('RealMoneyCasinosComponent', () => {
  let component: RealMoneyCasinosComponent;
  let fixture: ComponentFixture<RealMoneyCasinosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RealMoneyCasinosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RealMoneyCasinosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
