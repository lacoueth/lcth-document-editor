import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';
import { LcthFormObjectProperty } from '../../models/form-object.model';
import { properties } from 'ng-zorro-antd';

@Component({
  selector: 'lcth-document-editor-object-form-property-group',
  templateUrl: './object-form-property-group.component.html',
  styleUrls: ['./object-form-property-group.component.scss']
})
export class ObjectFormPropertyGroupComponent implements OnInit {

  @Input() properties: LcthFormObjectProperty[];
  @Input() object: any;

  @Output() ngModelChange = new EventEmitter();

  expand = {};

  ngOnInit() {
    const tmp = {};
    for (const e of this.properties) {
      switch (e.type) {
        case 'separator':
          break;
        case 'array':
          tmp[e.id] = [];
          break;
        case 'multiplechoice':
          tmp[e.id] = [];
          break;
        case 'object':
          tmp[e.id] = {};
          break;
        default:
          tmp[e.id] = '';
      }
    }
    this.object = { ...tmp, ...this.object };
    // console.log(this.object);
  }

  addItem(property: string) {
    this.object[property] && this.object[property] instanceof Array ?
      this.object[property] = [...this.object[property], {}]
      : this.object[property] = [{}];
  }

  async formPropertyChange(event, property: LcthFormObjectProperty) {
    // console.log(this.object, event, property);

    this.object = { ...this.object, [property.id]: event };
    /* Object.keys(this.object).length ?
      : this.object = { [property.id]: event }; */

    if (property.onUpdate) {
      await property.onUpdate(event, property);
    }

    this.ngModelChange.emit(this.object)
  }

  async formPropertyGroupChange(event, property: LcthFormObjectProperty, index: number) {
    this.object[property.id][index] = event;

    if (property.onUpdate) {
      // console.log(this.object[property.id][index]);
      this.object[property.id][index] = await property.onUpdate(event, property);
      // console.log(this.object[property.id][index]);
    }

    if (property.onArrayUpdate) {
      await property.onArrayUpdate(this.object, property);
    }

    this.ngModelChange.emit(this.object);
  }

  deleteItem(property: LcthFormObjectProperty, index: number) {
    const array = [...this.object[property.id]];
    array.splice(index, 1);
    this.object[property.id] = array;
    this.ngModelChange.emit(this.object);
  }

  moveItem(property: LcthFormObjectProperty, index: number, newIndex: number) {
    const array = [...this.object[property.id]];

    const newPlaceLegacyObject = array[newIndex];
    const objectToMove = array[index];
    array.splice(newIndex, 1, objectToMove);
    array.splice(index, 1, newPlaceLegacyObject);

    this.object[property.id] = array;
    this.ngModelChange.emit(this.object);
  }
}
