import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdventurePalaceComponent } from './adventure-palace.component';

describe('AdventurePalaceComponent', () => {
  let component: AdventurePalaceComponent;
  let fixture: ComponentFixture<AdventurePalaceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdventurePalaceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdventurePalaceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
