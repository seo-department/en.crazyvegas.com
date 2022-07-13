import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JackspayCasinoReviewComponent } from './jackspay-casino-review.component';

describe('JackspayCasinoReviewComponent', () => {
  let component: JackspayCasinoReviewComponent;
  let fixture: ComponentFixture<JackspayCasinoReviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JackspayCasinoReviewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(JackspayCasinoReviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
