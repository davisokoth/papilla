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
      .post(this.url + 'c_patients/search?filter[order]=firstname ASC', {code: fncdata, phoneno: fncdata, lastname: fncdata})
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
        this.displayRegisteredPatients(1, 'nothing').subscribe(data=>{
          this.registeredpatientsobj = data;
          console.log(data);
          this.RegisterNew = false;
        });
        //this.router.navigate([this.returnUrl]);
      }
      FRegisterNew() {
        this.viewForm = true;
        this.RegisterNew = false;
        this.search = false;
        this.viewRegisteredPatients = false;
        //alert('New patient' + this.RegisterNew);
      }

      SubmitForm() {
        var curDate = new Date();
        curDate.setHours(0,0,0,0);
    
        console.log("curDate");
        console.log(curDate);
        
        console.log("startdate");
        console.log(this.formPatientregistrationinfo.startdate);
    
        console.log("enddate");
        console.log(this.formPatientregistrationinfo.enddate);
    
        var add_day_to_enddate = new Date(this.formPatientregistrationinfo.enddate);
        add_day_to_enddate.setDate(add_day_to_enddate.getDate()+1);
        
        console.log("add_day_to_enddate");
        console.log(add_day_to_enddate);
        
        console.log("name");
        console.log(this.formPatientregistrationinfo.name);
    
        console.log("productcategory");
        console.log(this.formPatientregistrationinfo.productcategory);
        
    
        if(this.formPatientregistrationinfo.name == null){
          this.message ="Booking name cannot be blank"
          this.messageclass = "alert alert-danger"
          console.log(this.messageclass);
          return false;
        }
    
        if(this.formPatientregistrationinfo.productcategory == null){
          this.message ="Product Category cannot be blank"
          this.messageclass = "alert alert-danger"
          console.log(this.messageclass);
          return false;
        }
        
        
        if(this.formPatientregistrationinfo.startdate== null){
          this.message ="Start date cannot be blank"
          this.messageclass = "alert alert-danger"
          console.log(this.messageclass);
          return false;
        }
    
        if(this.formPatientregistrationinfo.enddate == null){
          this.message ="End date cannot be blank"
          this.messageclass = "alert alert-danger"
          console.log(this.messageclass);
          return false;
        }
    
        if(new Date(this.formPatientregistrationinfo.startdate) > new Date(this.formPatientregistrationinfo.enddate)){
          this.message ="End date: Should come after start date"
          this.messageclass = "alert alert-danger"   
          console.log(this.messageclass);
          return false;
        }
        if(new Date(this.formPatientregistrationinfo.startdate) < curDate){
          this.message ="Start date: Should be today or a future date."
          this.messageclass = "alert alert-danger"  
          console.log(this.messageclass);
            return false;
        }
          this.bookingService.createBooking(
          this.formPatientregistrationinfo.name, this.formPatientregistrationinfo.productcategory, this.formPatientregistrationinfo.startdate, add_day_to_enddate, this.atl_county_id).subscribe(data => {
            this.message ="Success! Booking Created"
            this.messageclass = "alert alert-success"
            this.formPatientregistrationinfo.name = "";
            this.formPatientregistrationinfo.startdate = "";
            this.formPatientregistrationinfo.enddate = "";
            this.formPatientregistrationinfo.productcategory = "";
            this.displayBookings();
            
            //this.router.navigate([this.returnUrl]);        
        },
          error => {
            console.log('createBooking Error!');
            console.log(error);
            this.message ="Booking NOT created"
            this.messageclass = "alert alert-danger"
            this.displayBookings();
          }); 
        }
    



}