import {DynFormModel} from './dynformmodel';

export class VisitModel extends DynFormModel {
  p_visit_id: number;
  b_paymode_id: number;
  visitno: string;
  firstname: string;
  visitresult: string;
  visittype: string;
  c_patient_id: number;
  c_facility_id: number;
  visitdate: string;
  isemergency: string;
  isinpatient: string;
}
