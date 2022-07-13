import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HawaiiComponent } from './hawaii.component';

describe('HawaiiComponent', () => {
  let component: HawaiiComponent;
  let fixture: ComponentFixture<HawaiiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HawaiiComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HawaiiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
