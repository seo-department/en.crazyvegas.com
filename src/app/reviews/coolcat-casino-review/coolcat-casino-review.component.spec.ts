import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CoolcatCasinoReviewComponent } from './coolcat-casino-review.component';

describe('CoolcatCasinoReviewComponent', () => {
  let component: CoolcatCasinoReviewComponent;
  let fixture: ComponentFixture<CoolcatCasinoReviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CoolcatCasinoReviewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CoolcatCasinoReviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
