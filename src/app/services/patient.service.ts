import { Injectable }       from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { URL } from '../globals';
import { PatientModel } from '../models/patient';

@Injectable()
export class PatientService {

  url = URL;

  constructor(private http: Http) {}

  getPatientModel(c_patient_id: number): Observable<PatientModel> {

    let patients$ = this.http
      .get(`${this.url}c_patients?filter[where][c_patient_id]=${c_patient_id}`)
      .map(response => response.json().map(this.toModel));
    return patients$;
  }

  toModel (r: any): PatientModel {
    const pt = new PatientModel();
      pt.c_patient_id = r.c_patient_id;
      pt.c_facility_id = r.c_facility_id;
      pt.code = r.code;
      pt.firstname = r.firstname;
      pt.middlename = r.middlename;
      pt.lastname = r.lastname;
      pt.idtype = r.lastname;
      pt.idnumber = r.idnumber;
      pt.gender = r.gender;
      pt.maritalstatus = r.maritalstatus;
      pt.dob = r.dob;
      pt.email = r.email;
      pt.nhifno = r.nhifno;
      pt.c_location_id = r.c_location_id;
      pt.occupation = r.occupation;
      pt.phoneno = r.phoneno;
      pt.phoneno2 = r.phoneno2;
      pt.physicaladdress = r.physicaladdress;
      pt.postaladdress = r.postaladdress;
      pt.postalcode = r.postalcode;
      pt.town = r.town;

    return pt;
  }
}
