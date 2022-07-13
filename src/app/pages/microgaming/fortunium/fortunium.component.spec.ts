import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FortuniumComponent } from './fortunium.component';

describe('FortuniumComponent', () => {
  let component: FortuniumComponent;
  let fixture: ComponentFixture<FortuniumComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FortuniumComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FortuniumComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
