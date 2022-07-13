import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FiveReelSlotsComponent } from './five-reel-slots.component';

describe('FiveReelSlotsComponent', () => {
  let component: FiveReelSlotsComponent;
  let fixture: ComponentFixture<FiveReelSlotsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FiveReelSlotsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FiveReelSlotsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
