import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EcopayzCasinosComponent } from './ecopayz-casinos.component';

describe('EcopayzCasinosComponent', () => {
  let component: EcopayzCasinosComponent;
  let fixture: ComponentFixture<EcopayzCasinosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EcopayzCasinosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EcopayzCasinosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
