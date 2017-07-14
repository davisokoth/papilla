import { QuestionBase } from '../models/question-base';

export class SelectBoxComponent extends QuestionBase {
  type: string;
  options: {key: string, value: string}[] = [];

  constructor(options) {
    super();
    this.options = options || [];
    this.type = 'select';
  }
}
