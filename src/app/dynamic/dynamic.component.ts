import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { QuestionService } from '../services/question.service';
import { FormService } from '../services/form.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-dynamic',
  templateUrl: './dynamic.component.html',
  styleUrls: ['./dynamic.component.css'],
  providers:  [QuestionService, FormService]
})
export class DynamicComponent implements OnInit {

  questions: any[];
  form: any;
  c_form_id: number;
  error: any;

  ngOnInit() { }

  constructor(
    private qService: QuestionService,
    private fService: FormService,
    private route: ActivatedRoute,
    private router: Router
  ) {
    this.c_form_id = this.route.snapshot.params['c_form_id'];
    qService.getQuestions(this.c_form_id).subscribe(
      data => {
        this.questions = data;
      },
      error => {
        console.log(error);
      });
    this.getForm(this.c_form_id);
  }

  getForm(c_form_id: number) {
    this.fService.getForm(c_form_id).subscribe(
      data => {
        this.form = data[0];
      },
      err => { this.error = true; }
    );
  }

}
