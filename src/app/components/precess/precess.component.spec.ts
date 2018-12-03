import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PrecessComponent } from './precess.component';

describe('PrecessComponent', () => {
  let component: PrecessComponent;
  let fixture: ComponentFixture<PrecessComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PrecessComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PrecessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
