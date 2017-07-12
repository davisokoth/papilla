import { QuestionBase } from '../models/question-base';

export class TextareaComponent extends QuestionBase<string> {

  controlType = 'texarea';
  type: string;
  options: {key: string, value: string}[] = [];

  constructor(options: {} = {}) {
    super(options);
    this.options = options['options'] || [];
  }

}
