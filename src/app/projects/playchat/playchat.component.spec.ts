import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PlaychatComponent } from './playchat.component';

describe('PlaychatComponent', () => {
  let component: PlaychatComponent;
  let fixture: ComponentFixture<PlaychatComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlaychatComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlaychatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
