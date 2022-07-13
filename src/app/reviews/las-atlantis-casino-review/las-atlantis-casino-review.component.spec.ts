import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LasAtlantisCasinoReviewComponent } from './las-atlantis-casino-review.component';

describe('LasAtlantisCasinoReviewComponent', () => {
  let component: LasAtlantisCasinoReviewComponent;
  let fixture: ComponentFixture<LasAtlantisCasinoReviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LasAtlantisCasinoReviewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LasAtlantisCasinoReviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
