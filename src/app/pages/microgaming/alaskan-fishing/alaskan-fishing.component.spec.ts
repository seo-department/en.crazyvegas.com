import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlaskanFishingComponent } from './alaskan-fishing.component';

describe('AlaskanFishingComponent', () => {
  let component: AlaskanFishingComponent;
  let fixture: ComponentFixture<AlaskanFishingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AlaskanFishingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AlaskanFishingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
