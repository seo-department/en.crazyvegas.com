import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AndroidCasinosComponent } from './android-casinos.component';

describe('AndroidCasinosComponent', () => {
  let component: AndroidCasinosComponent;
  let fixture: ComponentFixture<AndroidCasinosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AndroidCasinosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AndroidCasinosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
