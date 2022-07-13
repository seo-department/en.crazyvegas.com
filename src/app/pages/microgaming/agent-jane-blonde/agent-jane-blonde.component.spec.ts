import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgentJaneBlondeComponent } from './agent-jane-blonde.component';

describe('AgentJaneBlondeComponent', () => {
  let component: AgentJaneBlondeComponent;
  let fixture: ComponentFixture<AgentJaneBlondeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AgentJaneBlondeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AgentJaneBlondeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
