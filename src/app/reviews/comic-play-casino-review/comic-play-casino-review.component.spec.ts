import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComicPlayCasinoReviewComponent } from './comic-play-casino-review.component';

describe('ComicPlayCasinoReviewComponent', () => {
  let component: ComicPlayCasinoReviewComponent;
  let fixture: ComponentFixture<ComicPlayCasinoReviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ComicPlayCasinoReviewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ComicPlayCasinoReviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
