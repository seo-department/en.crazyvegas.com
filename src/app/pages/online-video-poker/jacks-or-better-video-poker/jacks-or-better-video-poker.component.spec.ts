import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JacksOrBetterVideoPokerComponent } from './jacks-or-better-video-poker.component';

describe('JacksOrBetterVideoPokerComponent', () => {
  let component: JacksOrBetterVideoPokerComponent;
  let fixture: ComponentFixture<JacksOrBetterVideoPokerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JacksOrBetterVideoPokerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(JacksOrBetterVideoPokerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
