import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PalaceOfChanceReviewComponent } from './palace-of-chance-review.component';

describe('PalaceOfChanceReviewComponent', () => {
  let component: PalaceOfChanceReviewComponent;
  let fixture: ComponentFixture<PalaceOfChanceReviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PalaceOfChanceReviewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PalaceOfChanceReviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
