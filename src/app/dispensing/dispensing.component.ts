import { Component, OnInit } from '@angular/core';
import { Injectable } from '@angular/core';
import {Observable} from 'rxjs/Observable';
import { Http, Headers, Response } from '@angular/http';
import {URL} from '../globals';
import 'rxjs/add/operator/map';

@Injectable()





@Component({
  selector: 'app-dispensing',
  templateUrl: './dispensing.component.html',
  styleUrls: ['./dispensing.component.css']
})

export class DispensingComponent implements OnInit {
  prescriptionsobj: any;
  constructor(private http: Http) {}
  
  ngOnInit() {
    this.displayPrescriptions().subscribe(data=>{
      this.prescriptionsobj = data;
      console.log("displayPrescriptions - subscribe" + data);
    });
  }

  displayPrescriptions(){
    
        const menus$ = this.http
          .get(`http://197.248.10.20:3000/api/v_prescriptions`)
          .map(response => response.json());
          return menus$;
      }



}
