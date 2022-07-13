import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ThreeReelSlotsComponent } from './three-reel-slots.component';

describe('ThreeReelSlotsComponent', () => {
  let component: ThreeReelSlotsComponent;
  let fixture: ComponentFixture<ThreeReelSlotsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ThreeReelSlotsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ThreeReelSlotsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
