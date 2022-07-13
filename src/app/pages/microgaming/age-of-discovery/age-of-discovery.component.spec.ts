import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgeOfDiscoveryComponent } from './age-of-discovery.component';

describe('AgeOfDiscoveryComponent', () => {
  let component: AgeOfDiscoveryComponent;
  let fixture: ComponentFixture<AgeOfDiscoveryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AgeOfDiscoveryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AgeOfDiscoveryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
