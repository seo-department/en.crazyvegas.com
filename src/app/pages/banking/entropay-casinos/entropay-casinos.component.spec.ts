import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EntropayCasinosComponent } from './entropay-casinos.component';

describe('EntropayCasinosComponent', () => {
  let component: EntropayCasinosComponent;
  let fixture: ComponentFixture<EntropayCasinosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EntropayCasinosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EntropayCasinosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
