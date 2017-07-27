import { Component, OnInit, Input } from '@angular/core';
import { QuestionBase } from '../models/question-base';

@Component({
  selector: 'app-text',
  templateUrl: './text.component.html',
  styleUrls: ['./text.component.css']
})
export class TextComponent extends QuestionBase {

  type: string;

  constructor() {
    super();
    this.type = 'text';
  }
}
