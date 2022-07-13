import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MybCasinoReviewComponent } from './myb-casino-review.component';

describe('MybCasinoReviewComponent', () => {
  let component: MybCasinoReviewComponent;
  let fixture: ComponentFixture<MybCasinoReviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MybCasinoReviewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MybCasinoReviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
