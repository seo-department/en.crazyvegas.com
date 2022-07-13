import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OnlineLotteriesComponent } from './online-lotteries.component';

describe('OnlineLotteriesComponent', () => {
  let component: OnlineLotteriesComponent;
  let fixture: ComponentFixture<OnlineLotteriesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OnlineLotteriesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OnlineLotteriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
