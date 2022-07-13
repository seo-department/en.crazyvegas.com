import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DelawareComponent } from './delaware.component';

describe('DelawareComponent', () => {
  let component: DelawareComponent;
  let fixture: ComponentFixture<DelawareComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DelawareComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DelawareComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
