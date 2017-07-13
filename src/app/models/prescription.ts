import {DynFormModel} from './dynformmodel';

export class PrescriptionModel extends DynFormModel {
  p_prescription_id: number;
  prescriber_id: number;
  c_patient_id: number;
  p_visit_id: number;
  isactive: string;
  isdispensed: string;
  p_medicalnote_id: number;
  c_dosage_id: number;
  m_product_id: number;
  m_store_id: number;
  quantity: number;
  batchno: string;
  specialnotes: string;
}
