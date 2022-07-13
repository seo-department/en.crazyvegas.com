import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AndromedaCasinoReviewComponent } from './andromeda-casino-review.component';

describe('AndromedaCasinoReviewComponent', () => {
  let component: AndromedaCasinoReviewComponent;
  let fixture: ComponentFixture<AndromedaCasinoReviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AndromedaCasinoReviewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AndromedaCasinoReviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
