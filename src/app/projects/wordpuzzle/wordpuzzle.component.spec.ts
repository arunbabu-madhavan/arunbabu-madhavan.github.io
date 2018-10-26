import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WordpuzzleComponent } from './wordpuzzle.component';

describe('WordpuzzleComponent', () => {
  let component: WordpuzzleComponent;
  let fixture: ComponentFixture<WordpuzzleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WordpuzzleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WordpuzzleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
