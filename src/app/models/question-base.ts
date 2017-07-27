export class QuestionBase {
  value: string;
  element: string;
  name: string;
  key: string;
  label: string;
  required: boolean;
  order: number;
  type: string;
  dataurl: string;
  ismandatory: string;
  iskeycolumn: string;
  isdisplayed: string;
  description: string;
  isnewline: string;
  isreported: string;
  placeholder: string;
  options: {key: string, value: string}[];

  constructor(
      value?: string,
      element?: string,
      key?: string,
      label?: string,
      required?: boolean,
      order?: number,
      type?: string,
      dataurl?: any,
      ismandatory?: string,
      iskeycolumn?: string,
      isdisplayed?: string,
      description?: string,
      isnewline?: string,
      isreported?: string,
      placeholder?: string,
      options?: {key: string, value: string}[]
    ) {
    this.value = value;
    this.element = element;
    this.name = name;
    this.key = key || '';
    this.label = label || '';
    this.required = !!required;
    this.order = order === undefined ? 1 : order;
    this.type = type || '';
    if (this.type === 'select') {
      this.dataurl = JSON.parse(dataurl);
      this.options = JSON.parse(dataurl);
    } else {
      this.dataurl = dataurl;
      this.options = [];
    }
    this.ismandatory = ismandatory;
    this.iskeycolumn = iskeycolumn;
    this.isdisplayed =  isdisplayed;
    this.description = description;
    this.isnewline = isnewline;
    this.isreported = isreported;
    this.placeholder = placeholder;
  }
}
