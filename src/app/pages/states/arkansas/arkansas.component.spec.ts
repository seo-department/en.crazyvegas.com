import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArkansasComponent } from './arkansas.component';

describe('ArkansasComponent', () => {
  let component: ArkansasComponent;
  let fixture: ComponentFixture<ArkansasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ArkansasComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ArkansasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
