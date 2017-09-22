import { Component, OnInit } from '@angular/core';
import { Injectable } from '@angular/core';
// import {Observable} from 'rxjs/Observable';
// import { Http, Headers, Response } from '@angular/http';
import { Http } from '@angular/http';
import {URL} from '../globals';
import 'rxjs/add/operator/map';
import { Router, ActivatedRoute } from '@angular/router';

@Injectable()

@Component({
  selector: 'app-patientregistration',
  templateUrl: './patientregistration.component.html',
  styleUrls: ['./patientregistration.component.css']
})

export class PatientregistrationComponent implements OnInit {
  NewPatient: any;
  datatopost: any;
  RegisteredPatients: any;
  search: any;
  RegisterNew: any;
  url = URL;
  urlfilter: any;
  mysearch: any;
  registeredpatientsobj: any;
  messageclass: any;
  message: any;
  user: any;
  user_id: any;
  viewRegisteredPatients: any;
  viewRegisteredPatientDetails: any;
  formPatientregistrationinfo: any = {};
  viewForm: any;
  constructor(
    private http: Http,
    private route: ActivatedRoute,
    private router: Router
  ) {}
  
  ngOnInit() {
    this.message ='Patient Registration';
    this.messageclass = 'alert alert-info';
    this.viewRegisteredPatients = true;
    this.viewRegisteredPatientDetails = false;
    this.viewForm = false;
    this.RegisterNew = false;
    this.search = true;
    this.displayRegisteredPatients(1, 'nothing').subscribe(data=>{
      this.registeredpatientsobj = data;
      console.log(data);
    });
    this.user = JSON.parse(localStorage.getItem('user'));
    this.user_id = this.user[0].c_user_id;
  }

  displayRegisteredPatients(how: number, fncdata: string) {
    if ( how === 1) {
      this.RegisteredPatients = this.http
      .get(this.url + 'c_patients?filter[order]=firstname ASC')
      .map(response => response.json());
      }

    if ( how === 2) {
      this.RegisteredPatients = this.http
      .post(this.url + 'c_patients/search', {code: fncdata, phoneno: fncdata, lastname: fncdata})
      .map(response => response.json());
    }
    return this.RegisteredPatients;
  }

Dispense(prescriptionid){
  this.F_Update_Prescription(prescriptionid).subscribe(data=>{
    this.message ='Prescription Updated';
    this.messageclass = 'alert alert-success';
    this.F_Post_Prescription_Dispensed(data).subscribe(data2=>{
      this.message ='Prescription Posted';
      this.messageclass = 'alert alert-success';
      this.F_Reduce_Stock(data2).subscribe(data3=>{
        this.message ='Stock Reduced';
        this.messageclass = 'alert alert-success';
        this.displayRegisteredPatients(1, 'nothing').subscribe(data=>{
          this.registeredpatientsobj = data;
        });
      },
      error => {
        this.message ='Could Not Reduce Stock';
        this.messageclass = 'alert alert-danger';
        return false;
      }); 
    },
    error => {
      this.message ='Could Not Post Prescription';
      this.messageclass = 'alert alert-danger';
      return false;
    }); 
  },
  error => {
    this.message ='Could Not UpdatePrescription';
    this.messageclass = 'alert alert-danger';
    return false;
  });
}

  F_Update_Prescription(prescriptionid){
    let today = new Date();
    let date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
    let time = today.getHours() + ':' + today.getMinutes() + ':' + today.getSeconds();
    let dateTime = date+' '+time;
    let updated = dateTime;
    console.log('F_Update_Prescription  ' + prescriptionid);
    const data2 = this.http.put(this.url+`p_prescriptions/`+prescriptionid, {isdispensed:'Y', updatedby: this.user_id, updated: updated})
    .map(response => response.json());
    return data2;
  }


  F_Post_Prescription_Dispensed(json){
    console.log('F_Post_Prescription_Dispensed ' + json);
    const data3 = this.http.post(this.url+`p_prescription_dispensed`, json)
    .map(response => response.json());
    return data3;
  }

  F_Reduce_Stock(json){
    const data4 = this.http.post(this.url+`p_prescription_dispensed/updatestock/`, {p_prescription_id: json['p_prescription_id']})
    .map(response => response.json());
    return data4;
    }

    searchPatient(event: any) { // without type info
      this.mysearch = event.target.value;
      this.displayRegisteredPatients(2, this.mysearch).subscribe(data=>{
        this.registeredpatientsobj = data;
        console.log(data);
        this.RegisterNew = true;
      });
      }

      Visit(c_patient_id, firstname) {
        alert('A visit has been created for patient ' + firstname + ': ' + c_patient_id);
        this.displayRegisteredPatients(1, 'nothing').subscribe(data => {
          this.registeredpatientsobj = data;
          console.log(data);
          this.RegisterNew = false;
        });
        // this.router.navigate([this.returnUrl]);
      }
      FRegisterNew() {
        this.viewForm = true;
        this.RegisterNew = false;
        this.search = false;
        this.viewRegisteredPatients = false;
        // alert('New patient' + this.RegisterNew);
      }

      SubmitForm() {
        this.datatopost = { firstname: this.formPatientregistrationinfo.firstname,
        lastname: this.formPatientregistrationinfo.lastname,
        middlename: this.formPatientregistrationinfo.middlename,
        idtype: this.formPatientregistrationinfo.idtype,
        idnumber: this.formPatientregistrationinfo.idnumber,
        gender: this.formPatientregistrationinfo.gender,
        maritalstatus: this.formPatientregistrationinfo.maritalstatus,
        dob: this.formPatientregistrationinfo.dob,
        email: this.formPatientregistrationinfo.email,
        c_facility_id: this.user[0].c_facility_id,
        c_location_id: this.formPatientregistrationinfo.c_location_id,
        nhifno: this.formPatientregistrationinfo.nhifno,
        occupation: this.formPatientregistrationinfo.occupation,
        phoneno: this.formPatientregistrationinfo.phoneno,
        phoneno2: this.formPatientregistrationinfo.phoneno2,
        physicaladdress: this.formPatientregistrationinfo.physicaladdress,
        postaladdress: this.formPatientregistrationinfo.postaladdress,
        postalcode: this.formPatientregistrationinfo.postalcode,
        town: this.formPatientregistrationinfo.town,
        createdby: this.user[0].c_facility_id,
        updatedby: this.user[0].c_facility_id
      };

          this.createPatient(this.datatopost).subscribe(data => {
              this.message ='Success! Patient Created'
              this.messageclass = 'alert alert-success'
              this.viewRegisteredPatients = true;
              this.viewRegisteredPatientDetails = false;
              this.viewForm = false;
              this.RegisterNew = false;
              this.search = true;
              this.displayRegisteredPatients(1, 'nothing').subscribe( displayRegisteredPatientsRes => {
                this.registeredpatientsobj = displayRegisteredPatientsRes;
                console.log(displayRegisteredPatientsRes);
            });
          },
          error => {
              console.log('createPatient Error!');
              console.log(error);
              this.message ='Patient NOT created'
              this.messageclass = 'alert alert-danger'
              this.displayRegisteredPatients(1, 'nothing').subscribe( displayRegisteredPatientsRes => {
                this.registeredpatientsobj = displayRegisteredPatientsRes;
                console.log(displayRegisteredPatientsRes);
              });
            });
        }

  createPatient(datatopost) { // without type info
    this.NewPatient = this.http
    .post(this.url + 'c_patients', datatopost)
    .map(response => response.json());
    return this.NewPatient;
  }
}
