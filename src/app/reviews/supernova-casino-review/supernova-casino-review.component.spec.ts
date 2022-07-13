import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SupernovaCasinoReviewComponent } from './supernova-casino-review.component';

describe('SupernovaCasinoReviewComponent', () => {
  let component: SupernovaCasinoReviewComponent;
  let fixture: ComponentFixture<SupernovaCasinoReviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SupernovaCasinoReviewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SupernovaCasinoReviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
