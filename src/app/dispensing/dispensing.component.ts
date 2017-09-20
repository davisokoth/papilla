import { Component, OnInit } from '@angular/core';
import { Injectable } from '@angular/core';
import {Observable} from 'rxjs/Observable';
import { Http, Headers, Response } from '@angular/http';
import {URL} from '../globals';
import 'rxjs/add/operator/map';
import { Router, ActivatedRoute } from '@angular/router';

@Injectable()

@Component({
  selector: 'app-dispensing',
  templateUrl: './dispensing.component.html',
  styleUrls: ['./dispensing.component.css']
})

export class DispensingComponent implements OnInit {
  url = URL;
  prescriptionsobj: any;
  messageclass: any;
  message: any;
  
  constructor(
    private http: Http,
    private route: ActivatedRoute,
    private router: Router
  ) {}
  
  ngOnInit() {
    this.message ="Dispensing";
    this.messageclass = "alert alert-info";
    this.displayPrescriptions().subscribe(data=>{
      this.prescriptionsobj = data;
    });
  }

  displayPrescriptions(){
    const data = this.http
    .get(this.url+`v_prescriptions?filter[where][dispensed]=N`)
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
        this.displayPrescriptions().subscribe(data=>{
          this.prescriptionsobj = data;
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
    console.log("F_Update_Prescription  " + prescriptionid);
    const data2 = this.http.put(this.url+`p_prescriptions/`+prescriptionid, {isdispensed:"Y"})
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