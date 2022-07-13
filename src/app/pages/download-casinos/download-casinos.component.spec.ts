import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DownloadCasinosComponent } from './download-casinos.component';

describe('DownloadCasinosComponent', () => {
  let component: DownloadCasinosComponent;
  let fixture: ComponentFixture<DownloadCasinosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DownloadCasinosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DownloadCasinosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
