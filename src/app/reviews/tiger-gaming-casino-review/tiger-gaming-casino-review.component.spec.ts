import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TigerGamingCasinoReviewComponent } from './tiger-gaming-casino-review.component';

describe('TigerGamingCasinoReviewComponent', () => {
  let component: TigerGamingCasinoReviewComponent;
  let fixture: ComponentFixture<TigerGamingCasinoReviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TigerGamingCasinoReviewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TigerGamingCasinoReviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
