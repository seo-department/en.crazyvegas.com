import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlayboyGoldComponent } from './playboy-gold.component';

describe('PlayboyGoldComponent', () => {
  let component: PlayboyGoldComponent;
  let fixture: ComponentFixture<PlayboyGoldComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PlayboyGoldComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PlayboyGoldComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
