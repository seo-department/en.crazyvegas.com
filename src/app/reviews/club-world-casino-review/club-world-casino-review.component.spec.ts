import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClubWorldCasinoReviewComponent } from './club-world-casino-review.component';

describe('ClubWorldCasinoReviewComponent', () => {
  let component: ClubWorldCasinoReviewComponent;
  let fixture: ComponentFixture<ClubWorldCasinoReviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ClubWorldCasinoReviewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ClubWorldCasinoReviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
