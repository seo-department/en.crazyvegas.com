import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UsemybankCasinosComponent } from './usemybank-casinos.component';

describe('UsemybankCasinosComponent', () => {
  let component: UsemybankCasinosComponent;
  let fixture: ComponentFixture<UsemybankCasinosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UsemybankCasinosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UsemybankCasinosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
