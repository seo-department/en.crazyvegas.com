import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TensOrBetterComponent } from './tens-or-better.component';

describe('TensOrBetterComponent', () => {
  let component: TensOrBetterComponent;
  let fixture: ComponentFixture<TensOrBetterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TensOrBetterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TensOrBetterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
