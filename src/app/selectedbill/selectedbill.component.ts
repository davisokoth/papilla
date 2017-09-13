import { Component, OnInit, Input } from '@angular/core';
import {CashierserviceService} from '../services/cashierservice.service';

@Component({
  selector: 'app-selectedbill',
  templateUrl: './selectedbill.component.html',
  styleUrls: ['./selectedbill.component.css']
})
export class SelectedbillComponent implements OnInit {

  @Input() item: any[];
  amount: number;
  isNotPaid = true;
  isNotPrinted = true; 
  name:string;

  constructor(private cashService: CashierserviceService) { }

  ngOnInit() {
  }

  payBill(){
  	let jsonObj = {
  			'createdby':1,
  			'updatedby':1,
  			'documentno': 'TEST',
  			'c_patient_id': 12,
  			'c_facility_id': 1,
  			'b_paymode_id': 1,
  			'amount': this.amount,
        'b_billing_id':1,
  			'ispayed': 'Y'
  		}
  	this.cashService.postPayment(JSON.stringify(jsonObj))
    .subscribe(
      data => {
        console.log(data);
        this.isNotPaid = false;
      },
      error => {
        alert('An error has occured!');
        console.log(error);
        console.log(jsonObj);
      }
    );
}


  

  print(name:string): void {

  	this.isNotPaid = true;

    let printContents, popupWin;
    this.name=name;
    printContents =this.name;
    popupWin = window.open('', '_blank', 'top=0,left=0,height=100%,width=auto');
    popupWin.document.open();
    popupWin.document.write(`
      <html>
        <head>
          <title>Bill Receipt</title>
          <style>
          
          </style>
        </head>
    <body onload="window.print();window.close()">${printContents}</body>
      </html>`
    );
    popupWin.document.close();
}


}
