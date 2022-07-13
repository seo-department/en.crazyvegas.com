import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PragmaticPlayCasinosComponent } from './pragmatic-play-casinos.component';

describe('PragmaticPlayCasinosComponent', () => {
  let component: PragmaticPlayCasinosComponent;
  let fixture: ComponentFixture<PragmaticPlayCasinosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PragmaticPlayCasinosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PragmaticPlayCasinosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
