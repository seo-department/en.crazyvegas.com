import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AvalonComponent } from './avalon.component';

describe('AvalonComponent', () => {
  let component: AvalonComponent;
  let fixture: ComponentFixture<AvalonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AvalonComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AvalonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
