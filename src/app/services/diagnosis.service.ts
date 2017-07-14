import { Injectable }       from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { URL } from '../globals';
import { DiagnosisModel } from '../models/diagnosis';

@Injectable()
export class DiagnosisService {

  url = URL;

  constructor(private http: Http) {}

  getDiagnoses(c_patient_id: number): Observable<DiagnosisModel[]> {

    let res$ = this.http
      .get(`${this.url}p_diagnosiss?filter[where][c_patient_id]=${c_patient_id}`)
      .map(response => response.json().map(this.toModel));
    return res$;
  }

  toModel (r: any): DiagnosisModel {
    const ps = new DiagnosisModel();
    ps.c_patient_id = r.c_patient_id;
    ps.notes = r.notes;
    ps.p_medicalnote_id = r.p_medicalnote_id;
    ps.disease_id = r.disease_id;

    return ps;
  }
}
