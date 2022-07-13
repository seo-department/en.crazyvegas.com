import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExoticCatsComponent } from './exotic-cats.component';

describe('ExoticCatsComponent', () => {
  let component: ExoticCatsComponent;
  let fixture: ComponentFixture<ExoticCatsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExoticCatsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ExoticCatsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
