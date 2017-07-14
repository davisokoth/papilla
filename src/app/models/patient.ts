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

  calculateAge() {

    let ageDifMs = Date.now() - new Date(this.dob).getTime();
    let ageDate = new Date(ageDifMs); // miliseconds from epoch
    return Math.abs(ageDate.getUTCFullYear() - 1970);
  }

  getDob() {
    return new Date(this.dob);
  }
}
