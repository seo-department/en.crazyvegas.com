import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MegaMoolahComponent } from './mega-moolah.component';

describe('MegaMoolahComponent', () => {
  let component: MegaMoolahComponent;
  let fixture: ComponentFixture<MegaMoolahComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MegaMoolahComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MegaMoolahComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
