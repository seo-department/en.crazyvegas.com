import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BarsAndStripesComponent } from './bars-and-stripes.component';

describe('BarsAndStripesComponent', () => {
  let component: BarsAndStripesComponent;
  let fixture: ComponentFixture<BarsAndStripesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BarsAndStripesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BarsAndStripesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
