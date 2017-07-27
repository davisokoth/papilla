import { Component, Input, OnInit } from '@angular/core';
import { UniversalService } from '../services/universal.service';
import { AutoCompleteComponent } from '../auto-complete/auto-complete.component';

@Component({
  selector: 'app-prescription',
  templateUrl: './prescription.component.html',
  styleUrls: ['./prescription.component.css']
})
export class PrescriptionComponent implements OnInit {

  @Input() p_visit_id: number;
  @Input() c_patient_id: number;
  
  days: string;
  pText: string;
  dText: string;
  m_product_id: number;
  c_dosage_id: number;
  
  pDataUrl = 'v_prescriptions';
  pPostUrl = 'p_prescriptions';
  
  pEndpoint = 'm_products';
  pPlaceholder = 'Drug Name';
  pKey = 'm_product_id';

  dEndpoint = 'c_dosages';
  dPlaceholder = 'Dosage';
  dKey = 'c_dosage_id';
  
  prescriptions = [];
  newPrescriptions = [];
  displayObjects = [];
  product: any;
  dosage: any;
  
  constructor(private uService: UniversalService) { }

  ngOnInit() {
    this.getPrescriptions();
  }

  pSelected(product: any) {
    product ? this.m_product_id = product['m_product_id'] : this.m_product_id = 0;
    this.product = product;
  }

  dSelected(dosage: any) {
    dosage ? this.c_dosage_id = dosage['c_dosage_id'] : this.c_dosage_id = 0;
    this.dosage = dosage;
  }

  getPrescriptions() {
    console.log(this.p_visit_id);
    this.uService.search(this.pDataUrl + '?filter[where][visitid]=' + this.p_visit_id)
      .subscribe(data => {
        this.prescriptions = data;
    });
  }

  persist(){
    let jsonObj = JSON.stringify({
      'createdby': 1,
      'updatedby': 1,
      'c_facility_id': 1,
      'c_patient_id': this.c_patient_id,
      'm_product_id': this.m_product_id,
      'c_dosage_id': this.c_dosage_id,
      'quantity': this.days,
      'p_visit_id': this.p_visit_id,
      'm_store_id': 1000009,
      'prescriber_id': 1,
      'isdispensed': 'N',
      'p_medicalnote_id': 155
    });
    let displayObject = {
      'product': this.product.name,
      'dosage': this.dosage.name,
      'quantity': this.days
    };
    this.newPrescriptions.push(jsonObj);
    this.displayObjects.push(displayObject);
    this.clearScreen();
  }

  createBillLines() {
    let jsonObj = JSON.stringify({
      'createdby': 1,
      'updatedby': 1,
      'documentno': '',
      'c_dosage_id': this.m_product_id,
      'c_patient_id': this.c_patient_id,
      'c_facility_id': 1,
      'p_visit_id': this.p_visit_id
    });
    this.uService.doPost(jsonObj, 'b_billings')
      .subscribe(
        data => {
          console.log(data);
          this.getPrescriptions();
        },
        error => {
          console.log(error);
        }
    );    
  }

  createPrescription() {
    this.newPrescriptions.forEach(item =>  {
      this.uService.doPost(item, 'p_prescriptions').subscribe(
        data => {
          console.log(data);
          // this.createBillLine();
        },
        error => {
          console.log(error);
        }
      );
    });    
  }

  save() {
    let jsonObj = JSON.stringify({
      'created':'2017-07-20',
      'createdby': 1,
      'updated': '2017-07-20',
      'updatedby': 1,
      'c_patient_id': this.c_patient_id,
      'c_facility_id': 1,
      'p_visit_id': this.p_visit_id
    });
    this.uService.doPost(jsonObj, 'b_billings').subscribe(
      data => {
        console.log(data);
        this.createPrescription();
      },
      error => {
        console.log(error);
      }
    );    
  }

  clearScreen(){
    this.pText = '';
    this.dText = '';
  }
}
