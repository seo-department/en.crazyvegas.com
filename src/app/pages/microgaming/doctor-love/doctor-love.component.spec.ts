import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DoctorLoveComponent } from './doctor-love.component';

describe('DoctorLoveComponent', () => {
  let component: DoctorLoveComponent;
  let fixture: ComponentFixture<DoctorLoveComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DoctorLoveComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DoctorLoveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
