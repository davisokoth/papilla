import { Component, Input, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';

import { QuestionBase } from '../models/question-base';

@Component({
  selector: 'df-element',
  templateUrl: './form-element.component.html',
  styleUrls: ['./form-element.component.css']
})
export class FormElementComponent  implements OnInit {
  @Input()
  question: QuestionBase;

  @Input()
  form: FormGroup;

  @Input()
  index: number;

  constructor() {}

  get isValid() {
    return this.form.controls[this.question.key].valid;
  }

  ngOnInit() {
    if (this.question.type === 'select') {
      console.log(this.question.dataurl);
    }
  }
}
