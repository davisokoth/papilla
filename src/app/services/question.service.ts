import { Injectable }       from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { URL } from '../globals';
import { QuestionBase } from '../models/question-base';

@Injectable()
export class QuestionService {

  url = URL;

  constructor(private http: Http) {}

  getQuestions(c_form_id: number): Observable<QuestionBase[]> {

    let questions$ = this.http
      .get(`${this.url}c_fields?filter[where][c_form_id]=${c_form_id}&filter[order]=sequence`)
      .map(response => response.json().map(this.toModel));
    return questions$;
  }

  toModel (r: any): QuestionBase {
    const question = new QuestionBase(
      r.value,
      r.name,
      r.key,
      r.label,
      r.required,
      r.order,
      r.type,
      r.dataurl,
      r.ismandatory,
      r.iskeycolumn,
      r.isdisplayed,
      r.description,
      r.isnewline,
      r.isreported,
      r.placeholder,
      []
    );
    return question;
  }
}
