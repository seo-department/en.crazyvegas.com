import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppleCasinosComponent } from './apple-casinos.component';

describe('AppleCasinosComponent', () => {
  let component: AppleCasinosComponent;
  let fixture: ComponentFixture<AppleCasinosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AppleCasinosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AppleCasinosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
