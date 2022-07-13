import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BushTelegraphComponent } from './bush-telegraph.component';

describe('BushTelegraphComponent', () => {
  let component: BushTelegraphComponent;
  let fixture: ComponentFixture<BushTelegraphComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BushTelegraphComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BushTelegraphComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
