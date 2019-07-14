import { Component, Input, Output, EventEmitter } from '@angular/core';
import { LcthFormObjectProperty } from '../../models/form-object.model';

@Component({
  selector: 'lcth-document-editor-object-form-property',
  templateUrl: './object-form-property.component.html',
  styleUrls: ['./object-form-property.component.scss']
})
export class ObjectFormPropertyComponent {
  @Input() property: LcthFormObjectProperty;
  @Input() object: any;
  @Output() ngModelChange = new EventEmitter();
}
