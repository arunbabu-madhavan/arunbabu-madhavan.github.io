import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SpaceAttackComponent } from './space-attack.component';

describe('SpaceAttackComponent', () => {
  let component: SpaceAttackComponent;
  let fixture: ComponentFixture<SpaceAttackComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SpaceAttackComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SpaceAttackComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
