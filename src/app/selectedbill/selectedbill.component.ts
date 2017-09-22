import { Component, OnInit, Input } from '@angular/core';
import { CashierserviceService} from '../services/cashierservice.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Http, Response } from '@angular/http';
import { URL } from '../globals';

@Component({
  selector: 'app-selectedbill',
  templateUrl: './selectedbill.component.html',
  styleUrls: ['./selectedbill.component.css']
})

export class SelectedbillComponent implements OnInit {

  private myurl="b_paymodes";
  data = [];
  myarr=[];

  test = false;
  itemx: any[];
  local: string;
  returnUrl: string;

  @Input() item: any[];
  amount: number=0;
  paymentmethod:any=2;
  isNotPaid = true;
  isNotPrinted = true; 
  name:string;

  constructor(private cashService: CashierserviceService, private http:Http,private route: ActivatedRoute,
    private router: Router) {}

  ngOnInit() {
    console.log(this.item);
    this.returnUrl = '/dashboard/cashier';
    this.getPlaces();
  }

  getPaymentValue(){
    return this.paymentmethod;
  }

  getData(){
    return this.http.get(this.myurl).map((res:Response)=>res.json())
  }

  getPlaces(){
    this.getData().subscribe(data=>{
      this.data=data;
    });
  }

  payBill(){
    this.getPaymentValue();
    console.log(this.item);
    var myitems=this.item;
    var totalValue=0;

    for (var j = 0; j < myitems.length; j++){
      totalValue=totalValue+(Number(myitems[j].amount));
      console.log(myitems[j].amount);
    }

    if(this.amount<totalValue){
      this.checkAmount();
    }
    else if(this.getPaymentValue()==''){
      alert('Please choose the payment method');
    }
    else{
      let jsonObj = {
        'createdby':1,
        'updatedby':1,
        'documentno': 1,
        'c_patient_id': this.item[0].c_patient_id,
        'c_facility_id': this.item[0].c_facility_id,
        'b_paymode_id': this.getPaymentValue(),
        'amount': this.amount,
        'b_billing_id':this.item[0].b_billing_id,
        'ispayed': 'Y'
      }
      this.cashService.postPayment(JSON.stringify(jsonObj))
      .subscribe(
        data => {
          console.log(data);
          this.isNotPaid = false;
          this.cashService.updateBill(this.item[0].b_billing_id)
            .subscribe(
              data => {
                console.log(data);
                this.item[0].ispayed = 'Y';
                this.router.navigate([this.returnUrl]);
              },
              error => {
                alert('An error has occured updating bill');
              }
            );
        },
        error => {
          alert('An error has occured!');
        }
      ); 

      this.print();
        this.cashService.getBills().subscribe(
        data => {
            this.myarr = data;
          }
      );
    }
  }

  refresh(): void {}


checkAmount(){

  console.log("Make full Payment to proceed");
  alert("Make full Payment to proceed");

}

print(){

 console.log(this.item);
 var myitems=this.item;
 var totalValue=0;
 var mybalance=0;
 var custName="";
 custName=myitems[0].lastname;
 

for (var j = 0; j < myitems.length; j++){
 totalValue=totalValue+(Number(myitems[j].amount));
  console.log(myitems[j].amount);
}

console.log(totalValue);

mybalance=this.amount-totalValue;



  
  this.isNotPaid = true;

    let payedValue,balance,amount,printContents,theCustomer, popupWin;
    
    payedValue=this.amount;
    amount=totalValue;
    balance=mybalance;    
    theCustomer=custName;

    popupWin = window.open('', '_blank', 'top=0,left=0,height=auto,width=200');
    popupWin.document.open();
    popupWin.document.write(`
      <html>
        <head>
          <title>Bill Receipt Kajiado District Hospital </title>
          <style>
          
          </style>
        </head>
        <body onload="window.print();window.close()">
          <h4>${theCustomer}</h4>

          <p>TOTAL AMOUNT: ${amount}</p>
          <p>AMOUNT PAID: ${payedValue}</p>
          <p>BALANCE: ${balance}</p>

        </body>
      </html>`
    );
    popupWin.document.close();
  }


}
