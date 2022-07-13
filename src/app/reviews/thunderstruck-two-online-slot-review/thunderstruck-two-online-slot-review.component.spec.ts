import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ThunderstruckTwoOnlineSlotReviewComponent } from './thunderstruck-two-online-slot-review.component';

describe('ThunderstruckTwoOnlineSlotReviewComponent', () => {
  let component: ThunderstruckTwoOnlineSlotReviewComponent;
  let fixture: ComponentFixture<ThunderstruckTwoOnlineSlotReviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ThunderstruckTwoOnlineSlotReviewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ThunderstruckTwoOnlineSlotReviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
