import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import {URL} from '../globals';
import { FormModel } from '../models/form';

@Injectable()
export class FormService {

  form: FormModel;
  url = URL;

  constructor(private http: Http) {}

  getForm(c_form_id: number): Observable<FormModel[]> {
    const form$ = this.http
      .get(`${this.url}c_forms?filter[where][c_form_id]=${c_form_id}`)
      .map(response => response.json());
      return form$;
  }
}
