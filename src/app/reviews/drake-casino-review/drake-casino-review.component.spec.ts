import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DrakeCasinoReviewComponent } from './drake-casino-review.component';

describe('DrakeCasinoReviewComponent', () => {
  let component: DrakeCasinoReviewComponent;
  let fixture: ComponentFixture<DrakeCasinoReviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DrakeCasinoReviewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DrakeCasinoReviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
