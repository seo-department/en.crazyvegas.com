import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SandPrincessSlotReviewComponent } from './sand-princess-slot-review.component';

describe('SandPrincessSlotReviewComponent', () => {
  let component: SandPrincessSlotReviewComponent;
  let fixture: ComponentFixture<SandPrincessSlotReviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SandPrincessSlotReviewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SandPrincessSlotReviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
