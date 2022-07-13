import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FreeSpinsComponent } from './free-spins.component';

describe('FreeSpinsComponent', () => {
  let component: FreeSpinsComponent;
  let fixture: ComponentFixture<FreeSpinsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FreeSpinsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FreeSpinsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
