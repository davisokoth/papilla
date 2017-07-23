import { Component, OnInit, Input } from '@angular/core';
import { QuestionBase } from '../models/question-base';

@Component({
  selector: 'app-textarea',
  templateUrl: './select.component.html',
  styleUrls: ['./select.component.css']
})
export class SelectComponent extends QuestionBase {
  type: string;
  options: {key: string, value: string}[] = [];

  constructor(options) {
    super();
    this.options = options || [];
    this.type = 'select';
  }
}
