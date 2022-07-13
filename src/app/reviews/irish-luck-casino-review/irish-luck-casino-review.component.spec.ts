import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IrishLuckCasinoReviewComponent } from './irish-luck-casino-review.component';

describe('IrishLuckCasinoReviewComponent', () => {
  let component: IrishLuckCasinoReviewComponent;
  let fixture: ComponentFixture<IrishLuckCasinoReviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IrishLuckCasinoReviewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IrishLuckCasinoReviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
