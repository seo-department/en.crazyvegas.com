import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FatLadySingsComponent } from './fat-lady-sings.component';

describe('FatLadySingsComponent', () => {
  let component: FatLadySingsComponent;
  let fixture: ComponentFixture<FatLadySingsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FatLadySingsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FatLadySingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
