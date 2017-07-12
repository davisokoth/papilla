import { QuestionBase } from '../models/question-base';

export class SelectBoxComponent extends QuestionBase<string> {
  controlType = 'dropdown';
  type: string;
  options: {key: string, value: string}[] = [];

  constructor(options: {} = {}) {
    super(options);
    this.options = options['options'] || [];
    this.type = options['type'] || '';
  }
}
