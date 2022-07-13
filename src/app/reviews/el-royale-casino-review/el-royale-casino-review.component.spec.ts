import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ElRoyaleCasinoReviewComponent } from './el-royale-casino-review.component';

describe('ElRoyaleCasinoReviewComponent', () => {
  let component: ElRoyaleCasinoReviewComponent;
  let fixture: ComponentFixture<ElRoyaleCasinoReviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ElRoyaleCasinoReviewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ElRoyaleCasinoReviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
