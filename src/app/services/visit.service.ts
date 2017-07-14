import { Injectable }       from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { URL } from '../globals';
import { VisitModel } from '../models/visit';

@Injectable()
export class VisitService {

  url = URL;

  constructor(private http: Http) {}

  getVisits(c_patient_id: number): Observable<VisitModel[]> {

    let visits$ = this.http
      .get(`${this.url}p_visits?filter[where][c_patient_id]=${c_patient_id}`)
      .map(response => response.json().map(this.toModel));
    return visits$;
  }

  toModel (r: any): VisitModel {
    const visit = new VisitModel();
    visit.p_visit_id = r.p_visit_id;
    visit.b_paymode_id = r.b_paymode_id;
    visit.visitno = r.visitno;
    visit.firstname = r.firstname;
    visit.visitresult = r.visitresult;
    visit.visittype = r.visittype;
    visit.c_patient_id = r.c_patient_id;
    visit.c_facility_id = r.c_facility_id;
    visit.visitdate = r.visitdate;
    visit.isemergency = r.isemergency;
    visit.isinpatient = r.isinpatient;

    return visit;
  }
}
