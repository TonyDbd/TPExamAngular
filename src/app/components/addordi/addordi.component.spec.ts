import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddordiComponent } from './addordi.component';

describe('AddordiComponent', () => {
  let component: AddordiComponent;
  let fixture: ComponentFixture<AddordiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddordiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddordiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
