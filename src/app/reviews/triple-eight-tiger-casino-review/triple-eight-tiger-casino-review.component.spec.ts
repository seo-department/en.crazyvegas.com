import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TripleEightTigerCasinoReviewComponent } from './triple-eight-tiger-casino-review.component';

describe('TripleEightTigerCasinoReviewComponent', () => {
  let component: TripleEightTigerCasinoReviewComponent;
  let fixture: ComponentFixture<TripleEightTigerCasinoReviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TripleEightTigerCasinoReviewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TripleEightTigerCasinoReviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
