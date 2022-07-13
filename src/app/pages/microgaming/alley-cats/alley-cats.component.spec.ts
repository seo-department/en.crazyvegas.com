import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlleyCatsComponent } from './alley-cats.component';

describe('AlleyCatsComponent', () => {
  let component: AlleyCatsComponent;
  let fixture: ComponentFixture<AlleyCatsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AlleyCatsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AlleyCatsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
