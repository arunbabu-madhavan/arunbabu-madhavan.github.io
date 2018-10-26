import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UnixFileSystemComponent } from './unix-file-system.component';

describe('UnixFileSystemComponent', () => {
  let component: UnixFileSystemComponent;
  let fixture: ComponentFixture<UnixFileSystemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UnixFileSystemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UnixFileSystemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
