import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrapsGlossaryComponent } from './craps-glossary.component';

describe('CrapsGlossaryComponent', () => {
  let component: CrapsGlossaryComponent;
  let fixture: ComponentFixture<CrapsGlossaryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CrapsGlossaryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CrapsGlossaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
