import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaysafecardCasinosComponent } from './paysafecard-casinos.component';

describe('PaysafecardCasinosComponent', () => {
  let component: PaysafecardCasinosComponent;
  let fixture: ComponentFixture<PaysafecardCasinosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PaysafecardCasinosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PaysafecardCasinosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
