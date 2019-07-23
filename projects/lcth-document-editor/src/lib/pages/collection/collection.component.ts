import { Component, OnInit, Input } from '@angular/core';
import { Observable } from 'rxjs';
import { LcthCollectionBuilder } from '../../models/collection-builder.model';

@Component({
  selector: 'lcth-document-editor-collection',
  templateUrl: './collection.component.html',
  styleUrls: ['./collection.component.scss']
})
export class LcthCollectionComponent implements OnInit {

  @Input() collection: LcthCollectionBuilder;
  @Input() database: any;

  @Input() containerClassNames: string = '';

  dataSet: Observable<any[]>;

  inputObject: any;
  outputObject: any;

  formObject: any;

  ngOnInit() {
    this.dataSet = this.database.getCollection(this.collection.id);
    this.createFormObject();
  }

  editObject(obj: any) {
    this.inputObject = { ...obj };
  }

  deleteObject(obj: any) {
    console.log('delete', obj);
  }

  async saveObject() {
    const output = this.outputObject;
    await this.database.updateCollectionDocument(this.collection.id, output);
    this.outputObject = null;
    this.inputObject = null;
  }

  async createFormObject() {
    this.formObject = await this.collection.documentFormBuilder(this.database);
  }
}
