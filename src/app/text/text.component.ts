import { QuestionBase } from '../models/question-base';

export class TextBoxComponent extends QuestionBase<string> {
  controlType = 'textbox';
  type: string;
  
  constructor(options: {} = {}) {
    super(options);
    this.type = options['type'] || '';
  }
}
