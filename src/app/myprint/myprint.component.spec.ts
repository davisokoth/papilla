import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyprintComponent } from './myprint.component';

describe('MyprintComponent', () => {
  let component: MyprintComponent;
  let fixture: ComponentFixture<MyprintComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyprintComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyprintComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
