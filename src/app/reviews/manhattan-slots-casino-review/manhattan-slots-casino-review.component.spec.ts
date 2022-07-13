import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManhattanSlotsCasinoReviewComponent } from './manhattan-slots-casino-review.component';

describe('ManhattanSlotsCasinoReviewComponent', () => {
  let component: ManhattanSlotsCasinoReviewComponent;
  let fixture: ComponentFixture<ManhattanSlotsCasinoReviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ManhattanSlotsCasinoReviewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ManhattanSlotsCasinoReviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
