import { TestBed } from '@angular/core/testing';

import { LcthDocumentEditorService } from './lcth-document-editor.service';

describe('LcthDocumentEditorService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: LcthDocumentEditorService = TestBed.get(LcthDocumentEditorService);
    expect(service).toBeTruthy();
  });
});
