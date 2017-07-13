import { QuestionBase } from '../models/question-base';

export class TextBoxComponent extends QuestionBase {

  type: string;

  constructor() {
    super();
    this.type = 'text';
  }
}
