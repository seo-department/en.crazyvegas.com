import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlaskaComponent } from './alaska.component';

describe('AlaskaComponent', () => {
  let component: AlaskaComponent;
  let fixture: ComponentFixture<AlaskaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AlaskaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AlaskaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
