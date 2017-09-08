import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CiJsmeComponent } from './ci-jsme.component';

describe('CiJsmeComponent', () => {
  let component: CiJsmeComponent;
  let fixture: ComponentFixture<CiJsmeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CiJsmeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CiJsmeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
