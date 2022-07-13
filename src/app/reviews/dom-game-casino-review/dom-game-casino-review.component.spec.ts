import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DomGameCasinoReviewComponent } from './dom-game-casino-review.component';

describe('DomGameCasinoReviewComponent', () => {
  let component: DomGameCasinoReviewComponent;
  let fixture: ComponentFixture<DomGameCasinoReviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DomGameCasinoReviewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DomGameCasinoReviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
