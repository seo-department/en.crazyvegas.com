import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GossipSlotsCasinoReviewComponent } from './gossip-slots-casino-review.component';

describe('GossipSlotsCasinoReviewComponent', () => {
  let component: GossipSlotsCasinoReviewComponent;
  let fixture: ComponentFixture<GossipSlotsCasinoReviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GossipSlotsCasinoReviewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GossipSlotsCasinoReviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
