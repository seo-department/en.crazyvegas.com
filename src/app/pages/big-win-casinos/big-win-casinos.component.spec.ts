import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BigWinCasinosComponent } from './big-win-casinos.component';

describe('BigWinCasinosComponent', () => {
  let component: BigWinCasinosComponent;
  let fixture: ComponentFixture<BigWinCasinosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BigWinCasinosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BigWinCasinosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
