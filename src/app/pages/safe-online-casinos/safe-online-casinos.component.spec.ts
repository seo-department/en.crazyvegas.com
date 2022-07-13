import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SafeOnlineCasinosComponent } from './safe-online-casinos.component';

describe('SafeOnlineCasinosComponent', () => {
  let component: SafeOnlineCasinosComponent;
  let fixture: ComponentFixture<SafeOnlineCasinosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SafeOnlineCasinosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SafeOnlineCasinosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
