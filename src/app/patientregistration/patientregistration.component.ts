import { Component, OnInit } from '@angular/core';
import { Injectable } from '@angular/core';
import {Observable} from 'rxjs/Observable';
import { Http, Headers, Response } from '@angular/http';
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
  url = URL;
  registeredpatientsobj: any;
  messageclass: any;
  message: any;
  user: any;
  user_id: any;
  viewRegisteredPatients: any;
  viewRegisteredPatientDetails: any;
  formPatientregistrationinfo: any;
  constructor(
    private http: Http,
    private route: ActivatedRoute,
    private router: Router
  ) {}
  
  ngOnInit() {
    this.message ="Patient Registration";
    this.messageclass = "alert alert-info";
    this.viewRegisteredPatients = true
    this.viewRegisteredPatientDetails = false;
    this.displayRegisteredPatients().subscribe(data=>{
      this.registeredpatientsobj = data;
      console.log(data);
    });
    this.user = JSON.parse(localStorage.getItem('user'));
    this.user_id = this.user[0].c_user_id;
  }

  displayRegisteredPatients(){
    const data = this.http
    .get(this.url+`c_patients?filter[order]=firstname ASC`)
    .map(response => response.json());
    return data;
  }

Dispense(prescriptionid){
  this.F_Update_Prescription(prescriptionid).subscribe(data=>{
    this.message ="Prescription Updated";
    this.messageclass = "alert alert-success";
    this.F_Post_Prescription_Dispensed(data).subscribe(data2=>{
      this.message ="Prescription Posted";
      this.messageclass = "alert alert-success";
      this.F_Reduce_Stock(data2).subscribe(data3=>{
        this.message ="Stock Reduced";
        this.messageclass = "alert alert-success";
        this.displayRegisteredPatients().subscribe(data=>{
          this.registeredpatientsobj = data;
        });
      },
      error => {
        this.message ="Could Not Reduce Stock";
        this.messageclass = "alert alert-danger";
        return false;
      }); 
    },
    error => {
      this.message ="Could Not Post Prescription";
      this.messageclass = "alert alert-danger";
      return false;
    }); 
  },
  error => {
    this.message ="Could Not UpdatePrescription";
    this.messageclass = "alert alert-danger";
    return false;
  });
}

  F_Update_Prescription(prescriptionid){
    let today = new Date();
    let date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
    let time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
    let dateTime = date+' '+time;
    let updated = dateTime;
    console.log("F_Update_Prescription  " + prescriptionid);
    const data2 = this.http.put(this.url+`p_prescriptions/`+prescriptionid, {isdispensed:"Y", updatedby: this.user_id, updated: updated})
    .map(response => response.json());
    return data2;
  }


  F_Post_Prescription_Dispensed(json){
    console.log("F_Post_Prescription_Dispensed " + json);
    const data3 = this.http.post(this.url+`p_prescription_dispensed`, json)
    .map(response => response.json());
    return data3;
  }

  F_Reduce_Stock(json){
    const data4 = this.http.post(this.url+`p_prescription_dispensed/updatestock/`, {p_prescription_id: json['p_prescription_id']})
    .map(response => response.json());
    return data4;
    }
}