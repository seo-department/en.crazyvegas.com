import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AceLuckyCasinoReviewComponent } from './ace-lucky-casino-review.component';

describe('AceLuckyCasinoReviewComponent', () => {
  let component: AceLuckyCasinoReviewComponent;
  let fixture: ComponentFixture<AceLuckyCasinoReviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AceLuckyCasinoReviewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AceLuckyCasinoReviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
