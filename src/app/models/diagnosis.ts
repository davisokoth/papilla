import {DynFormModel} from './dynformmodel';

export class DiagnosisModel extends DynFormModel {

  p_diagnosis_id: number;
  notes: string;
  c_patient_id: number;
  c_facility_id: number;
  p_medicalnote_id: number;
  disease_id: number;
}
