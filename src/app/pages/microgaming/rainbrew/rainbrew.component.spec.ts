import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RainbrewComponent } from './rainbrew.component';

describe('RainbrewComponent', () => {
  let component: RainbrewComponent;
  let fixture: ComponentFixture<RainbrewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RainbrewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RainbrewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
