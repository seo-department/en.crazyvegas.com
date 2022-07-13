import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrapsTipsComponent } from './craps-tips.component';

describe('CrapsTipsComponent', () => {
  let component: CrapsTipsComponent;
  let fixture: ComponentFixture<CrapsTipsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CrapsTipsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CrapsTipsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
