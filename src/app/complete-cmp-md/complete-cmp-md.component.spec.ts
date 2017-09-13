import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { CompleteCmpMdComponent } from './complete-cmp-md.component';

describe('CompleteCmpMdComponent', () => {
  let component: CompleteCmpMdComponent;
  let fixture: ComponentFixture<CompleteCmpMdComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompleteCmpMdComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompleteCmpMdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
