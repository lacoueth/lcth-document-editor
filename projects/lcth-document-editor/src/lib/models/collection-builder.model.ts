import { Type } from '@angular/core';
import { LcthFormObject } from './form-object.model';

export interface LcthCollectionBuilder {
    title: string;
    itemTitle: string;
    id: string;
    itemComponent?: Type<any>;
    listComponent?: Type<any>;
    documentFormBuilder: (dbRef?: any) => Promise<LcthFormObject>;
}