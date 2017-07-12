import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DynaformComponent } from './dynaform.component';

describe('DynaformComponent', () => {
  let component: DynaformComponent;
  let fixture: ComponentFixture<DynaformComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DynaformComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DynaformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
