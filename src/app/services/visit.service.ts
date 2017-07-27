import { Injectable }       from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { URL } from '../globals';
// import { VisitModel } from '../models/visit';
import { PatientVisitModel } from '../models/patientvisit';

@Injectable()
export class VisitService {

  url = URL;

  constructor(private http: Http) {}

  getVisits(c_patient_id: number): Observable<PatientVisitModel[]> {

    let visits$ = this.http
      .get(`${this.url}v_patientvisits?filter[where][c_patient_id]=${c_patient_id}`)
      .map(response => response.json().map(this.toModel));
    return visits$;
  }

  getNodeVisits(c_node_id: number): Observable<PatientVisitModel[]> {

    let visits$ = this.http
      .get(`${this.url}v_patientvisits?filter[where][c_node_id]=${c_node_id}`)
      .map(response => response.json().map(this.toModel));
    return visits$;
  }

  getVisit(p_visit_id: number): Observable<PatientVisitModel> {

    let visit$ = this.http
      .get(`${this.url}v_patientvisits?filter[where][p_visit_id]=${p_visit_id}`)
      .map(response => response.json().map(this.toModel));
    return visit$;
  }

  toModel (r: any): PatientVisitModel {
    const visit = new PatientVisitModel();
    visit.p_visit_id = r.p_visit_id;
    visit.c_node_id = r.c_node_id;
    visit.visitno = r.visitno;
    visit.patient_name = r.patient_name;
    visit.visitresult = r.visitresult;
    visit.dob = r.dob;
    visit.gender = r.gender;
    visit.facility_name = r.facility_name;
    visit.visittype = r.visittype;
    visit.code = r.code;
    visit.node = r.node;
    visit.p_medicalnote_id = r.p_medicalnote_id;
    visit.c_patient_id = r.c_patient_id;
    visit.c_facility_id = r.c_facility_id;
    visit.visit_date = r.visit_date;
    visit.isemergency = r.isemergency;
    visit.isinpatient = r.isinpatient;

    return visit;
  }
}
