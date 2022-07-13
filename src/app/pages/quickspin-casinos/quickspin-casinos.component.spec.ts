import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuickspinCasinosComponent } from './quickspin-casinos.component';

describe('QuickspinCasinosComponent', () => {
  let component: QuickspinCasinosComponent;
  let fixture: ComponentFixture<QuickspinCasinosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ QuickspinCasinosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(QuickspinCasinosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
