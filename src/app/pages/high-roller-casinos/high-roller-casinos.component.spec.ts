import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HighRollerCasinosComponent } from './high-roller-casinos.component';

describe('HighRollerCasinosComponent', () => {
  let component: HighRollerCasinosComponent;
  let fixture: ComponentFixture<HighRollerCasinosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HighRollerCasinosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HighRollerCasinosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
