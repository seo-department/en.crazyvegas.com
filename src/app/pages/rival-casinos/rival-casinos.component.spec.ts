import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RivalCasinosComponent } from './rival-casinos.component';

describe('RivalCasinosComponent', () => {
  let component: RivalCasinosComponent;
  let fixture: ComponentFixture<RivalCasinosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RivalCasinosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RivalCasinosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
