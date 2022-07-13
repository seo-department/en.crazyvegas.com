import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeucesWildVideoPokerComponent } from './deuces-wild-video-poker.component';

describe('DeucesWildVideoPokerComponent', () => {
  let component: DeucesWildVideoPokerComponent;
  let fixture: ComponentFixture<DeucesWildVideoPokerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeucesWildVideoPokerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DeucesWildVideoPokerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
