import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PrintcomponentComponent } from './printcomponent.component';

describe('PrintcomponentComponent', () => {
  let component: PrintcomponentComponent;
  let fixture: ComponentFixture<PrintcomponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PrintcomponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PrintcomponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
