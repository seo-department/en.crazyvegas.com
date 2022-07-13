import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArcticFortuneComponent } from './arctic-fortune.component';

describe('ArcticFortuneComponent', () => {
  let component: ArcticFortuneComponent;
  let fixture: ComponentFixture<ArcticFortuneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ArcticFortuneComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ArcticFortuneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
