import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KentuckyComponent } from './kentucky.component';

describe('KentuckyComponent', () => {
  let component: KentuckyComponent;
  let fixture: ComponentFixture<KentuckyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ KentuckyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(KentuckyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
