import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailordiComponent } from './detailordi.component';

describe('DetailordiComponent', () => {
  let component: DetailordiComponent;
  let fixture: ComponentFixture<DetailordiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetailordiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailordiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
