import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JokersWildComponent } from './jokers-wild.component';

describe('JokersWildComponent', () => {
  let component: JokersWildComponent;
  let fixture: ComponentFixture<JokersWildComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JokersWildComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(JokersWildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
