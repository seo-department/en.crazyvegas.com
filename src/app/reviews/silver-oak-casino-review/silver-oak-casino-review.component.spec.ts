import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SilverOakCasinoReviewComponent } from './silver-oak-casino-review.component';

describe('SilverOakCasinoReviewComponent', () => {
  let component: SilverOakCasinoReviewComponent;
  let fixture: ComponentFixture<SilverOakCasinoReviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SilverOakCasinoReviewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SilverOakCasinoReviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
