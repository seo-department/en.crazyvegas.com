import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BearlyFishingComponent } from './bearly-fishing.component';

describe('BearlyFishingComponent', () => {
  let component: BearlyFishingComponent;
  let fixture: ComponentFixture<BearlyFishingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BearlyFishingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BearlyFishingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
