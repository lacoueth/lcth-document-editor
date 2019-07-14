import { NgModule } from '@angular/core';

import { NgZorroAntdModule, NZ_I18N, en_US } from 'ng-zorro-antd';

import { LcthEditorModule } from 'lcth-editor';

/** config angular i18n **/
import { registerLocaleData, CommonModule } from '@angular/common';
import en from '@angular/common/locales/en';
import { FormsModule } from '@angular/forms';

import { DocumentTemplateComponent } from './organisms/document-template/document-template.component';
import { DocumentTemplateHostDirective } from './directives/document-template-host/document-template-host.directive';

import { ObjectFormComponent } from './organisms/object-form/object-form.component';
import { ObjectFormPropertyGroupComponent } from './organisms/object-form-property-group/object-form-property-group.component';
import { ObjectFormPropertyComponent } from './molecules/object-form-property/object-form-property.component';

import { LcthCollectionComponent } from './pages/collection/collection.component';
import { LcthDocumentEditComponent } from './pages/edit-document/edit-document.component';

registerLocaleData(en);

@NgModule({
  declarations: [
    DocumentTemplateHostDirective,
    DocumentTemplateComponent,

    ObjectFormComponent,
    ObjectFormPropertyGroupComponent,
    ObjectFormPropertyComponent,

    LcthCollectionComponent,
    LcthDocumentEditComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    NgZorroAntdModule,
    LcthEditorModule
  ],
  exports: [
    DocumentTemplateHostDirective,
    DocumentTemplateComponent,

    ObjectFormComponent,
    ObjectFormPropertyGroupComponent,
    ObjectFormPropertyComponent,

    LcthCollectionComponent,
    LcthDocumentEditComponent
  ],
  entryComponents: []
})
export class LcthDocumentEditorModule { }
