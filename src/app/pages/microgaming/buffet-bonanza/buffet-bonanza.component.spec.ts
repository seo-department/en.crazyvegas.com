import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BuffetBonanzaComponent } from './buffet-bonanza.component';

describe('BuffetBonanzaComponent', () => {
  let component: BuffetBonanzaComponent;
  let fixture: ComponentFixture<BuffetBonanzaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BuffetBonanzaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BuffetBonanzaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
