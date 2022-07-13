import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SportsBettingComponent } from './sports-betting.component';

describe('SportsBettingComponent', () => {
  let component: SportsBettingComponent;
  let fixture: ComponentFixture<SportsBettingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SportsBettingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SportsBettingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
