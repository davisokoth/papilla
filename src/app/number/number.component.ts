import { QuestionBase } from '../models/question-base';

export class NumberBoxComponent extends QuestionBase<string> {
  controlType = 'number';
  type: string;
  
  constructor(options: {} = {}) {
    super(options);
    this.type = options['type'] || '';
  }
}
