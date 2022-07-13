import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MicrogamingComponent } from './microgaming.component';

describe('MicrogamingComponent', () => {
  let component: MicrogamingComponent;
  let fixture: ComponentFixture<MicrogamingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MicrogamingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MicrogamingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
