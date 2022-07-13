import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HowToPlayCrapsComponent } from './how-to-play-craps.component';

describe('HowToPlayCrapsComponent', () => {
  let component: HowToPlayCrapsComponent;
  let fixture: ComponentFixture<HowToPlayCrapsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HowToPlayCrapsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HowToPlayCrapsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
