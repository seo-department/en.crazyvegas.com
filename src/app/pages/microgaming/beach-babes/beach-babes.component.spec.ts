import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BeachBabesComponent } from './beach-babes.component';

describe('BeachBabesComponent', () => {
  let component: BeachBabesComponent;
  let fixture: ComponentFixture<BeachBabesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BeachBabesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BeachBabesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
