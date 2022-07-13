import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SlotsTipsComponent } from './slots-tips.component';

describe('SlotsTipsComponent', () => {
  let component: SlotsTipsComponent;
  let fixture: ComponentFixture<SlotsTipsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SlotsTipsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SlotsTipsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
