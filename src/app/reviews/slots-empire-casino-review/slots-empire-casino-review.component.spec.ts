import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SlotsEmpireCasinoReviewComponent } from './slots-empire-casino-review.component';

describe('SlotsEmpireCasinoReviewComponent', () => {
  let component: SlotsEmpireCasinoReviewComponent;
  let fixture: ComponentFixture<SlotsEmpireCasinoReviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SlotsEmpireCasinoReviewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SlotsEmpireCasinoReviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
