import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JuicyVegasCasinoReviewComponent } from './juicy-vegas-casino-review.component';

describe('JuicyVegasCasinoReviewComponent', () => {
  let component: JuicyVegasCasinoReviewComponent;
  let fixture: ComponentFixture<JuicyVegasCasinoReviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JuicyVegasCasinoReviewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(JuicyVegasCasinoReviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
