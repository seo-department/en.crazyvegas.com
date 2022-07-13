import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WildCasinoReviewComponent } from './wild-casino-review.component';

describe('WildCasinoReviewComponent', () => {
  let component: WildCasinoReviewComponent;
  let fixture: ComponentFixture<WildCasinoReviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WildCasinoReviewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WildCasinoReviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
