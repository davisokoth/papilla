import { QuestionBase } from '../models/question-base';

export class TextareaComponent extends QuestionBase {

  type: string;

  constructor(options: {} = {}) {
    super();
    this.type = 'textarea';
  }

}
