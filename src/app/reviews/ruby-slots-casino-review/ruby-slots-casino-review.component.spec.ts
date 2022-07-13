import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RubySlotsCasinoReviewComponent } from './ruby-slots-casino-review.component';

describe('RubySlotsCasinoReviewComponent', () => {
  let component: RubySlotsCasinoReviewComponent;
  let fixture: ComponentFixture<RubySlotsCasinoReviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RubySlotsCasinoReviewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RubySlotsCasinoReviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
