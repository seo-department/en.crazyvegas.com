import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExclusiveCasinoReviewComponent } from './exclusive-casino-review.component';

describe('ExclusiveCasinoReviewComponent', () => {
  let component: ExclusiveCasinoReviewComponent;
  let fixture: ComponentFixture<ExclusiveCasinoReviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExclusiveCasinoReviewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ExclusiveCasinoReviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
