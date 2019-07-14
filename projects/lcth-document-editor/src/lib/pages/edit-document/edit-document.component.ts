import { Component, Input, OnChanges } from '@angular/core';
import { Observable } from 'rxjs';
import { LcthFormObject } from '../../models/form-object.model';

@Component({
  selector: 'lcth-document-editor',
  templateUrl: './edit-document.component.html',
  styleUrls: ['./edit-document.component.scss']
})
export class LcthDocumentEditComponent implements OnChanges {

  @Input() title?: string;
  @Input() document: any;
  @Input() documentFormModel: LcthFormObject;
  @Input() database: any;

  @Input() onSave: (object: any) => Promise<any>;

  dataSet: Observable<any[]>;

  inputObject: any;
  outputObject: any;

  formObject: any;

  constructor() { }

  ngOnChanges() {
    this.editObject(this.document);
  }

  editObject(obj) {
    this.inputObject = { ...obj };
  }

  async saveObject() {
    const output = this.outputObject;
    await this.onSave(output);
    this.outputObject = null;
    this.inputObject = null;
  }
}
