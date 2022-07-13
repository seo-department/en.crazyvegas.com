import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrapsRulesComponent } from './craps-rules.component';

describe('CrapsRulesComponent', () => {
  let component: CrapsRulesComponent;
  let fixture: ComponentFixture<CrapsRulesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CrapsRulesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CrapsRulesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
