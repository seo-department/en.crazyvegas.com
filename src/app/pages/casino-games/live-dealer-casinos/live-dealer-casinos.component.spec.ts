import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LiveDealerCasinosComponent } from './live-dealer-casinos.component';

describe('LiveDealerCasinosComponent', () => {
  let component: LiveDealerCasinosComponent;
  let fixture: ComponentFixture<LiveDealerCasinosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LiveDealerCasinosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LiveDealerCasinosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
