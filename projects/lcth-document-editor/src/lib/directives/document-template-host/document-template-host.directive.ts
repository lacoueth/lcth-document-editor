import { Directive, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[lcthDocumentEditorTemplateHost]'
})
export class DocumentTemplateHostDirective {
  constructor(public viewContainerRef: ViewContainerRef) { }
}
