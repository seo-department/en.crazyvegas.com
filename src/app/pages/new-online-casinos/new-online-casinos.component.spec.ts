import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewOnlineCasinosComponent } from './new-online-casinos.component';

describe('NewOnlineCasinosComponent', () => {
  let component: NewOnlineCasinosComponent;
  let fixture: ComponentFixture<NewOnlineCasinosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewOnlineCasinosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NewOnlineCasinosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
