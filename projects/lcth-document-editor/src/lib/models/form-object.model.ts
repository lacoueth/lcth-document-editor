export interface LcthFormObject {
    name: string;
    id: string;
    properties: LcthFormObjectProperty[];
}

export interface LcthFormSelectOption {
    label: string;
    value: string;
}

export interface LcthFormObjectProperty {
    label: string;
    id: string;
    type: 'separator'
    | 'object'
    | 'array'
    | 'string'
    | 'longstring'
    | 'richtext'
    | 'number'
    | 'uniqchoice'
    | 'multiplechoice'
    | 'file'
    | 'date'
    | 'daterange'
    | 'time'
    | 'timefull';

    disabled?: boolean;

    fileTypes?: string[];

    placeholder?: string;
    defaultValue?: string;

    hint?: string;
    errorHint?: string;

    options?: LcthFormSelectOption[];
    subObject?: LcthFormObjectProperty[];
    arrayOf?: LcthFormObjectProperty[];

    onUpdate?: (
        value: any,
        property: any,
    ) => Promise<any>;
    onArrayUpdate?: (
        array: any[],
        property: any,
    ) => Promise<any[]>;
}