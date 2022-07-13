import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PennsylvaniaComponent } from './pennsylvania.component';

describe('PennsylvaniaComponent', () => {
  let component: PennsylvaniaComponent;
  let fixture: ComponentFixture<PennsylvaniaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PennsylvaniaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PennsylvaniaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
