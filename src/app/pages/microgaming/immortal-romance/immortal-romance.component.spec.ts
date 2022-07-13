import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImmortalRomanceComponent } from './immortal-romance.component';

describe('ImmortalRomanceComponent', () => {
  let component: ImmortalRomanceComponent;
  let fixture: ComponentFixture<ImmortalRomanceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ImmortalRomanceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ImmortalRomanceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
