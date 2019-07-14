import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'lcth-document-editor',
  template: `
  <input 
  nz-input
  [placeholder]="''" />
  `,
  styles: []
})
export class LcthDocumentEditorComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
