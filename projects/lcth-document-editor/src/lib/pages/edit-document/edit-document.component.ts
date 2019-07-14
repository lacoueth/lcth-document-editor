import { Component, Input, OnChanges, Output, EventEmitter } from '@angular/core';
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

  @Output() onSave = new EventEmitter();
  @Output() onClose = new EventEmitter();

  inputObject: any;
  outputObject: any;

  constructor() { }

  ngOnChanges() {
    this.editObject(this.document);
  }

  editObject(obj: any) {
    this.inputObject = obj ? { ...obj } : null;
  }

  async saveObject() {
    this.onSave.emit(this.outputObject);
    this.closeDrawer();
  }

  closeDrawer() {
    this.onClose.emit();

    setTimeout(() => {
      this.outputObject = null;
      this.inputObject = null;
    }, 400);
  }
}
