import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RichPalmsCasinoReviewComponent } from './rich-palms-casino-review.component';

describe('RichPalmsCasinoReviewComponent', () => {
  let component: RichPalmsCasinoReviewComponent;
  let fixture: ComponentFixture<RichPalmsCasinoReviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RichPalmsCasinoReviewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RichPalmsCasinoReviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
