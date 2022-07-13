import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlaySunnyCasinoReviewComponent } from './play-sunny-casino-review.component';

describe('PlaySunnyCasinoReviewComponent', () => {
  let component: PlaySunnyCasinoReviewComponent;
  let fixture: ComponentFixture<PlaySunnyCasinoReviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PlaySunnyCasinoReviewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PlaySunnyCasinoReviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
