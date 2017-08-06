import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CommontemplateComponent } from './commontemplate.component';

describe('CommontemplateComponent', () => {
  let component: CommontemplateComponent;
  let fixture: ComponentFixture<CommontemplateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CommontemplateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CommontemplateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
