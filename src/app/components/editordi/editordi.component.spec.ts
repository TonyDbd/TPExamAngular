import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditordiComponent } from './editordi.component';

describe('EditordiComponent', () => {
  let component: EditordiComponent;
  let fixture: ComponentFixture<EditordiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditordiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditordiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
