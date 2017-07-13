import { Injectable }       from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { URL } from '../globals';
import { PatientServiceModel } from '../models/patientservice';

@Injectable()
export class PatientServiceService {

  url = URL;

  constructor(private http: Http) {}

  getPatientServices(c_form_id: number): Observable<PatientServiceModel[]> {

    let ps$ = this.http
      .get(`${this.url}c_fields?filter[where][c_form_id]=${c_form_id}`)
      .map(response => response.json().map(this.toModel));
    return ps$;
  }

  toModel (r: any): PatientServiceModel {
    const ps = new PatientServiceModel();
    ps.p_patientservice_id = r.p_patientservice_id;
    ps.c_patient_id = r.c_patient_id;
    ps.notes = r.notes;
    ps.p_medicalnote_id = r.p_medicalnote_id;
    ps.p_visit_id = r.p_visit_id;
    ps.m_product_id = r.m_product_id;
    ps.daterequested = r.daterequested;
    ps.isadministered = r.isadministered;
    ps.dateadministered = r.dateadministered;
    ps.administeredby = r.administeredby;
    ps.isbilled = r.isbilled;
    ps.ref_notes = r.ref_notes;

    return ps;
  }
}
