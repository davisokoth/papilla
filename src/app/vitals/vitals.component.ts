import { Component, Input, OnInit } from '@angular/core';
import { UniversalService } from '../services/universal.service';

@Component({
  selector: 'app-vitals',
  templateUrl: './vitals.component.html',
  styleUrls: ['./vitals.component.css']
})
export class VitalsComponent implements OnInit {

  @Input() p_visit_id: number;

  notes: string;
  text: string;
  m_product_id: number;
  endpoint = 'm_products?filter[where][m_productgroup_id]=8&&filter[where][isservice]=Y';
  dataUrl = 'v_vitals';
  postUrl = 'p_medicalnotelines';
  placeholder = 'Vital Sign';
  primarykey = 'm_product_id';
  vitals = [];
  
  constructor(private uService: UniversalService) { }

  ngOnInit() {
    this.getVitals();
  }

  selected(product: any) {
    product ? this.m_product_id = product['m_product_id'] : this.m_product_id = 0;
    // console.log(m_product_id);
    // Should do a bit of validation here!
  }

  getVitals() {
    this.uService.search(this.dataUrl + '?filter[where][p_visit_id]=' + this.p_visit_id)
      .subscribe(data => {
        this.vitals = data;
    });
  }

  persist(){
    console.log(`Data: ${this.p_visit_id}, ${this.notes}, ${this.text} `)
    let jsonObj = JSON.stringify({
      'p_medicalnote_id': 58,
      'created':'2017-07-20',
      'createdby': 1,
      'updated': '2017-07-20',
      'updatedby': 1,
      'm_product_id': this.m_product_id,
      'notes': this.notes,
      'p_visit_id': this.p_visit_id
    });
    this.uService.doPost(jsonObj, this.postUrl).subscribe(
      data => {
        console.log(data);
        this.getVitals();
      },
      error => {
        console.log(error);
      }
    );
  }
}
