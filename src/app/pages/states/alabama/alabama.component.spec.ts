import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlabamaComponent } from './alabama.component';

describe('AlabamaComponent', () => {
  let component: AlabamaComponent;
  let fixture: ComponentFixture<AlabamaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AlabamaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AlabamaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
