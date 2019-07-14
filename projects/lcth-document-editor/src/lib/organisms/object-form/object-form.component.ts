import { Component, Input, Output, EventEmitter } from '@angular/core';
import { LcthFormObject } from '../../models/form-object.model';

@Component({
  selector: 'lcth-document-editor-object-form',
  templateUrl: './object-form.component.html',
  styleUrls: ['./object-form.component.scss']
})
export class ObjectFormComponent {

  @Input() formObject: LcthFormObject;
  @Input() object: any = {};

  @Output() ngModelChange = new EventEmitter();

  updateObject(obj: any) {
    this.ngModelChange.emit(obj);
  }
}
