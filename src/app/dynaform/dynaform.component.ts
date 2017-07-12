import { Component, Input, OnInit }  from '@angular/core';
import { FormGroup }                 from '@angular/forms';
import { QuestionBase }              from '../models/question-base';
import { QuestionControlService }    from '../services/question-control.service';
// import { FormElementComponent }      from '../form-element/form-element.component';


@Component({
  selector: 'app-dynaform',
  templateUrl: './dynaform.component.html',
  styleUrls: ['./dynaform.component.css']
})
export class DynaformComponent implements OnInit {

  @Input()
  questions: QuestionBase [] = [];

  form: FormGroup;
  payLoad = '';

  constructor(private qcs: QuestionControlService) {  }

  ngOnInit() {
    this.form = this.qcs.toFormGroup(this.questions);
    // console.log(this.questions);
  }

  onSubmit() {
    this.payLoad = JSON.stringify(this.form.value);
  }

  trackByIndex() {}

}
