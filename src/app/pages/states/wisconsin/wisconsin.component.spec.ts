import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WisconsinComponent } from './wisconsin.component';

describe('WisconsinComponent', () => {
  let component: WisconsinComponent;
  let fixture: ComponentFixture<WisconsinComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WisconsinComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WisconsinComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
