import { Component, OnInit } from '@angular/core';
import {CashierserviceService} from '../services/cashierservice.service';

@Component({
  selector: 'app-cashier',
  templateUrl: './cashier.component.html',
  styleUrls: ['./cashier.component.css']
})
export class CashierComponent implements OnInit {

myarr: any[];
test = false;
itemx: any[];
local: string;


  constructor(private mycashierservice:CashierserviceService) { 
    this.mycashierservice.getBills().subscribe(
      data => {
          this.myarr = data;
          console.log(this.myarr);
          this.test = true;
          this.local = 'Me here';
          console.log(this.local);
        }
    );
  }

  ngOnInit() {}

  myEvent(b_billing_id:number){
    console.log(name);
    this.mycashierservice.getBillDetails(b_billing_id).subscribe(
      data => {
          this.itemx = data;
          console.log(this.itemx);
        }
    );
  }

  print(name:string): void {

    let printContents, popupWin;
    printContents = document.getElementById('print-section').innerHTML;
    popupWin = window.open('', '_blank', 'top=0,left=0,height=100%,width=auto');
    popupWin.document.open();
    popupWin.document.write(`
      <html>
        <head>
          <title>{{name}}</title>
          <style>
          
          </style>
        </head>
    <body onload="window.print();window.close()">${printContents}</body>
      </html>`
    );
    popupWin.document.close();
}

}
