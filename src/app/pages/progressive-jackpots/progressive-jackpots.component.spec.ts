import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProgressiveJackpotsComponent } from './progressive-jackpots.component';

describe('ProgressiveJackpotsComponent', () => {
  let component: ProgressiveJackpotsComponent;
  let fixture: ComponentFixture<ProgressiveJackpotsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProgressiveJackpotsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProgressiveJackpotsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
