import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OldHavanaCasinoReviewComponent } from './old-havana-casino-review.component';

describe('OldHavanaCasinoReviewComponent', () => {
  let component: OldHavanaCasinoReviewComponent;
  let fixture: ComponentFixture<OldHavanaCasinoReviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OldHavanaCasinoReviewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OldHavanaCasinoReviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
