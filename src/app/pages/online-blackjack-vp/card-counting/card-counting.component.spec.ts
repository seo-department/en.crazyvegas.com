import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardCountingComponent } from './card-counting.component';

describe('CardCountingComponent', () => {
  let component: CardCountingComponent;
  let fixture: ComponentFixture<CardCountingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CardCountingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CardCountingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
