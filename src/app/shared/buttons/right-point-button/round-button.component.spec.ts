import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RoundButtonComponent } from './right-point-button.component';

describe('RoundButtonComponent', () => {
  let component: RoundButtonComponent;
  let fixture: ComponentFixture<RoundButtonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RoundButtonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RoundButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
