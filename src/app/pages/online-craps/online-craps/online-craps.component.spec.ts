import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OnlineCrapsComponent } from './online-craps.component';

describe('OnlineCrapsComponent', () => {
  let component: OnlineCrapsComponent;
  let fixture: ComponentFixture<OnlineCrapsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OnlineCrapsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OnlineCrapsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
