import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WelcomeBonusComponent } from './welcome-bonus.component';

describe('WelcomeBonusComponent', () => {
  let component: WelcomeBonusComponent;
  let fixture: ComponentFixture<WelcomeBonusComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WelcomeBonusComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WelcomeBonusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
