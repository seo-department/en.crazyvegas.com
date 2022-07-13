import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BoogieMonstersComponent } from './boogie-monsters.component';

describe('BoogieMonstersComponent', () => {
  let component: BoogieMonstersComponent;
  let fixture: ComponentFixture<BoogieMonstersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BoogieMonstersComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BoogieMonstersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
