import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OnlineBaccaratComponent } from './online-baccarat.component';

describe('OnlineBaccaratComponent', () => {
  let component: OnlineBaccaratComponent;
  let fixture: ComponentFixture<OnlineBaccaratComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OnlineBaccaratComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OnlineBaccaratComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
