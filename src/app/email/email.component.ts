import { QuestionBase } from '../models/question-base';

export class EmailBoxComponent extends QuestionBase {
  type: string;

  constructor() {
    super();
    this.type = 'email';
  }
}
