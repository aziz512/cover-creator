import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormattingPanelComponent } from './formatting-panel.component';

describe('FormattingPanelComponent', () => {
  let component: FormattingPanelComponent;
  let fixture: ComponentFixture<FormattingPanelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormattingPanelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormattingPanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
