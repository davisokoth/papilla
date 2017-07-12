import { Injectable }       from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class QuestionService {

  url = URL;

  constructor(private http: Http) {}

  getQuestions(c_form_id: number): Observable<any[]> {
    let questions$ = this.http
      .get(`${this.url}c_fields/${c_form_id}`)
      .map(response => response.json());

    return questions$;
  }
}
