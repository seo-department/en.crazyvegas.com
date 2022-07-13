import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WildScarabsComponent } from './wild-scarabs.component';

describe('WildScarabsComponent', () => {
  let component: WildScarabsComponent;
  let fixture: ComponentFixture<WildScarabsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WildScarabsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WildScarabsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
