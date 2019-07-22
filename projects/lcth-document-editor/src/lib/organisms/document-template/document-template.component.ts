import { Component, OnInit, Input, Type, ViewChild, ComponentFactoryResolver, Output, EventEmitter, ComponentRef, OnChanges } from '@angular/core';
import { DocumentTemplateHostDirective } from '../../directives/document-template-host/document-template-host.directive';

@Component({
  selector: 'lcth-document-editor-document-template',
  templateUrl: './document-template.component.html',
  styleUrls: ['./document-template.component.scss']
})
export class DocumentTemplateComponent implements OnInit, OnChanges {

  @Input() component: Type<any>;
  @Input() data: any;

  // @ViewChild(DocumentTemplateHostDirective, { static: true }) => Angular 8
  @ViewChild(DocumentTemplateHostDirective, { static: true }) templateHost: DocumentTemplateHostDirective;

  @Output() edit = new EventEmitter();
  @Output() open = new EventEmitter();

  componentRef: ComponentRef<any>;

  constructor(private componentFactoryResolver: ComponentFactoryResolver) { }

  ngOnInit() {
    const componentFactory = this.componentFactoryResolver.resolveComponentFactory(this.component);

    const viewContainerRef = this.templateHost.viewContainerRef;
    viewContainerRef.clear();

    this.componentRef = viewContainerRef.createComponent(componentFactory);
    this.componentRef.instance.data = this.data;
    this.componentRef.instance.edit = (ev: any) => this.edit.emit(ev);
    this.componentRef.instance.open = (ev: any) => this.open.emit(ev);
  }

  ngOnChanges() {
    if (this.componentRef) {
      this.componentRef.instance.data = this.data;
    }
  }

}
