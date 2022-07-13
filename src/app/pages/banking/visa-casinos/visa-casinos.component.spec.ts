import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VisaCasinosComponent } from './visa-casinos.component';

describe('VisaCasinosComponent', () => {
  let component: VisaCasinosComponent;
  let fixture: ComponentFixture<VisaCasinosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VisaCasinosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VisaCasinosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
