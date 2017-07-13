import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CheatCodeComponent } from './cheat-code.component';

describe('CheatCodeComponent', () => {
  let component: CheatCodeComponent;
  let fixture: ComponentFixture<CheatCodeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CheatCodeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CheatCodeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
