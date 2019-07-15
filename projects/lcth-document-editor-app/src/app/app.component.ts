import { Component } from '@angular/core';
import { LcthFormObject } from 'projects/lcth-document-editor/src/public-api';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  log = console.log;
  outputObject: any;
  testObject: LcthFormObject = {
    name: 'Test',
    id: 'test',
    properties: [
      {
        label: 'Strings',
        id: '',
        type: 'separator'
      },
      {
        label: 'String',
        id: 'string',
        type: 'string',
        hint: 'Here is the hint !'
      },
      {
        label: 'Long string',
        id: 'longstring',
        type: 'longstring'
      },
      {
        label: 'Rich text',
        id: 'richtext',
        type: 'richtext'
      },
      {
        label: 'Number',
        id: '',
        type: 'separator'
      },
      {
        label: 'Number',
        id: 'number',
        type: 'number'
      },
      {
        label: 'Selects',
        id: '',
        type: 'separator'
      },
      {
        label: 'Uniq choice',
        id: 'uniqchoice',
        type: 'uniqchoice',
        options: [
          { label: 'Choice 1', value: 'choice_1' },
          { label: 'Choice 2', value: 'choice_2' },
          { label: 'Choice 3', value: 'choice_3' }
        ]
      },
      {
        label: 'Multiple choice',
        id: 'multiplechoice',
        type: 'multiplechoice',
        options: [
          { label: 'Choice 1', value: 'choice_1' },
          { label: 'Choice 2', value: 'choice_2' },
          { label: 'Choice 3', value: 'choice_3' },
          { label: 'Choice 4', value: 'choice_4' },
          { label: 'Choice 5', value: 'choice_5' },
          { label: 'Choice 6', value: 'choice_6' }
        ]
      },
      {
        label: 'Complex objects',
        id: '',
        type: 'separator'
      },
      {
        label: 'Object',
        id: 'object',
        type: 'object',
        subObject: [
          {
            label: 'String',
            id: 'string',
            type: 'string',
          }
        ]
      },
      {
        label: 'Array',
        id: 'array',
        type: 'array',
        arrayOf: [
          {
            label: 'String',
            id: 'string',
            type: 'string',
          }
        ]
      },
      {
        label: 'Dates and time',
        id: '',
        type: 'separator'
      },
      {
        label: 'Date',
        id: 'date',
        type: 'date'
      },
      {
        label: 'Date Range',
        id: 'daterange',
        type: 'daterange'
      },
      {
        label: 'Time',
        id: 'time',
        type: 'time'
      },
      {
        label: 'Time full',
        id: 'timefull',
        type: 'timefull'
      },
      {
        label: 'Result',
        id: '',
        type: 'separator'
      },
    ]
  };
}
