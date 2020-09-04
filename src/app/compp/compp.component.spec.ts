import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ComppComponent } from './compp.component';

describe('ComppComponent', () => {
  let component: ComppComponent;
  let fixture: ComponentFixture<ComppComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ComppComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ComppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
