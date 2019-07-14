import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LcthDocumentEditorComponent } from './lcth-document-editor.component';

describe('LcthDocumentEditorComponent', () => {
  let component: LcthDocumentEditorComponent;
  let fixture: ComponentFixture<LcthDocumentEditorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LcthDocumentEditorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LcthDocumentEditorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
