import {DynFormModel} from './dynformmodel';

export class PatientModel extends DynFormModel {
  c_patient_id: number;
  c_facility_id: number;
  code: string;
  firstname: string;
  middlename: string;
  lastname: string;
  idtype: string;
  idnumber: string;
  gender: string;
  maritalstatus: number;
  dob: string;
  email: string;
  nhifno: string;
  c_location_id: number;
  occupation: string;
  phoneno: string;
  phoneno2: string;
  physicaladdress: string;
  postaladdress: string;
  postalcode: string;
  town: string;
}
