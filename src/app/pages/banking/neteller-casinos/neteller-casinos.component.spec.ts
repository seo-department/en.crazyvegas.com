import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NetellerCasinosComponent } from './neteller-casinos.component';

describe('NetellerCasinosComponent', () => {
  let component: NetellerCasinosComponent;
  let fixture: ComponentFixture<NetellerCasinosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NetellerCasinosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NetellerCasinosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
