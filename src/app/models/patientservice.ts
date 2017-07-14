import {DynFormModel} from './dynformmodel';

export class PatientServiceModel extends DynFormModel {
  c_patient_id: number;
  p_patientservice_id: number;
  notes: string;
  p_medicalnote_id: number;
  p_visit_id: number;
  m_product_id: number;
  daterequested: string;
  isadministered: string;
  dateadministered: string;
  administeredby: number;
  isbilled: string;
  ref_notes: string;
  attachment: string;
}
