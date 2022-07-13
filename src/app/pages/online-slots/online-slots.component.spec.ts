import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OnlineSlotsComponent } from './online-slots.component';

describe('OnlineSlotsComponent', () => {
  let component: OnlineSlotsComponent;
  let fixture: ComponentFixture<OnlineSlotsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OnlineSlotsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OnlineSlotsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
