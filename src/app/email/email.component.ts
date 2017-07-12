import { QuestionBase } from '../models/question-base';

export class EmailBoxComponent extends QuestionBase<string> {
  controlType = 'email';
  type: string;
  
  constructor(options: {} = {}) {
    super(options);
    this.type = options['type'] || '';
  }
}
