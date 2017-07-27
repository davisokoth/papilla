import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectedbillComponent } from './selectedbill.component';

describe('SelectedbillComponent', () => {
  let component: SelectedbillComponent;
  let fixture: ComponentFixture<SelectedbillComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SelectedbillComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SelectedbillComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
