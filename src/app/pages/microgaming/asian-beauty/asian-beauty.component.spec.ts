import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AsianBeautyComponent } from './asian-beauty.component';

describe('AsianBeautyComponent', () => {
  let component: AsianBeautyComponent;
  let fixture: ComponentFixture<AsianBeautyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AsianBeautyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AsianBeautyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
