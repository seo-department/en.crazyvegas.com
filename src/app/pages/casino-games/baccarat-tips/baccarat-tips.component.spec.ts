import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BaccaratTipsComponent } from './baccarat-tips.component';

describe('BaccaratTipsComponent', () => {
  let component: BaccaratTipsComponent;
  let fixture: ComponentFixture<BaccaratTipsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BaccaratTipsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BaccaratTipsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
