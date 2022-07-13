import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IgtGamingCasinosComponent } from './igt-gaming-casinos.component';

describe('IgtGamingCasinosComponent', () => {
  let component: IgtGamingCasinosComponent;
  let fixture: ComponentFixture<IgtGamingCasinosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IgtGamingCasinosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IgtGamingCasinosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
