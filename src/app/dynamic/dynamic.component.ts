import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

/**
 * import { EmailBoxComponent } from '../email/email.component';
import { NumberBoxComponent } from '../number/number.component';
import { SelectBoxComponent } from '../select/select.component';
import { TextBoxComponent } from '../text/text.component';
import { TextareaComponent } from '../textarea/textarea.component';
import { QuestionBase }     from '../models/question-base';
 */

import { QuestionService } from '../services/question.service';
import { FormService } from '../services/form.service';
import { Observable } from 'rxjs';

// import { FormModel } from '../models/form'

@Component({
  selector: 'app-dynamic',
  templateUrl: './dynamic.component.html',
  styleUrls: ['./dynamic.component.css'],
  providers:  [QuestionService, FormService]
})
export class DynamicComponent implements OnInit {

  questions: Observable<any[]>;
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
    this.c_form_id = this.route.snapshot.params['id'];
    console.log(`Menu ID: ${this.c_form_id}`);
    this.questions = qService.getQuestions(this.c_form_id);
    this.form = this.getForm(this.c_form_id);
  }

  getForm(lmis_form_id: number) {
    this.fService.getForm(lmis_form_id).subscribe(
      data => {
        this.form = data;
        console.log(data);
      },
      err => { this.error = true; }
    );
  }

}
