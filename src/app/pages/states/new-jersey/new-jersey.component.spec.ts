import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewJerseyComponent } from './new-jersey.component';

describe('NewJerseyComponent', () => {
  let component: NewJerseyComponent;
  let fixture: ComponentFixture<NewJerseyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewJerseyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NewJerseyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
