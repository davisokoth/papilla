
import {DynFormModel} from './dynformmodel';

export class PatientVisitModel extends DynFormModel {
  p_visit_id: number;
  visitno: string;
  patient_name: string;
  dob: string;
  gender: string;
  visitresult: string;
  visittype: string;
  facility_name: string;
  code: string;
  c_patient_id: number;
  c_facility_id: number;
  c_node_id: number;
  node: string;
  visit_date: string;
  p_medicalnote_id: number;
  isemergency: string;
  isinpatient: string;

  calculateAge() {

    let ageDifMs = Date.now() - new Date(this.dob).getTime();
    let ageDate = new Date(ageDifMs);
    return Math.abs(ageDate.getUTCFullYear() - 1970);
  }

  getDob() {
    return new Date(this.dob);
  }
}
