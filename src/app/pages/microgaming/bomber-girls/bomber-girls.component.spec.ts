import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BomberGirlsComponent } from './bomber-girls.component';

describe('BomberGirlsComponent', () => {
  let component: BomberGirlsComponent;
  let fixture: ComponentFixture<BomberGirlsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BomberGirlsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BomberGirlsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
