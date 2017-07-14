import {DynFormModel} from './dynformmodel';

export class MedicalNoteModel extends DynFormModel {
  p_medicalnote_id: number;
  c_patient_id: number;
  p_visit_id: number;
  c_node_id: number;
  c_department_id: number;
  c_user_id: number;
  documentno: string;
  notes: number;
}
