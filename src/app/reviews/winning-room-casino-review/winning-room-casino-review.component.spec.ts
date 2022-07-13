import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WinningRoomCasinoReviewComponent } from './winning-room-casino-review.component';

describe('WinningRoomCasinoReviewComponent', () => {
  let component: WinningRoomCasinoReviewComponent;
  let fixture: ComponentFixture<WinningRoomCasinoReviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WinningRoomCasinoReviewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WinningRoomCasinoReviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
