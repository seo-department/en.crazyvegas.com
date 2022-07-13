import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TexasComponent } from './texas.component';

describe('TexasComponent', () => {
  let component: TexasComponent;
  let fixture: ComponentFixture<TexasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TexasComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TexasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
