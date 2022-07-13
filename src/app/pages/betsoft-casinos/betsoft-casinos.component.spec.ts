import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BetsoftCasinosComponent } from './betsoft-casinos.component';

describe('BetsoftCasinosComponent', () => {
  let component: BetsoftCasinosComponent;
  let fixture: ComponentFixture<BetsoftCasinosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BetsoftCasinosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BetsoftCasinosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
