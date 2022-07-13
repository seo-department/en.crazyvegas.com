import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CabinFeverComponent } from './cabin-fever.component';

describe('CabinFeverComponent', () => {
  let component: CabinFeverComponent;
  let fixture: ComponentFixture<CabinFeverComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CabinFeverComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CabinFeverComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
