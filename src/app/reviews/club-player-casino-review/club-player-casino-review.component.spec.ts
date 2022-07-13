import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClubPlayerCasinoReviewComponent } from './club-player-casino-review.component';

describe('ClubPlayerCasinoReviewComponent', () => {
  let component: ClubPlayerCasinoReviewComponent;
  let fixture: ComponentFixture<ClubPlayerCasinoReviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ClubPlayerCasinoReviewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ClubPlayerCasinoReviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
