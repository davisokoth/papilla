import { Component, OnInit, Input } from '@angular/core';
import { QuestionBase } from '../models/question-base';

@Component({
  selector: 'app-textarea',
  templateUrl: './textarea.component.html',
  styleUrls: ['./textarea.component.css']
})
export class TextAreaComponent extends QuestionBase {

  type: string;

  constructor(options: {} = {}) {
    super();
    this.type = 'textarea';
  }

}
