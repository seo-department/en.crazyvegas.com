import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MobileCasinosComponent } from './mobile-casinos.component';

describe('MobileCasinosComponent', () => {
  let component: MobileCasinosComponent;
  let fixture: ComponentFixture<MobileCasinosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MobileCasinosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MobileCasinosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
