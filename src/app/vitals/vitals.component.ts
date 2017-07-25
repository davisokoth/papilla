import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-vitals',
  templateUrl: './vitals.component.html',
  styleUrls: ['./vitals.component.css']
})
export class VitalsComponent implements OnInit {

  @Input() p_visit_id: number;

  notes: string;
  text: string;
  endpoint = 'm_products';
  placeholder = 'Vital Sign';
  primarykey = 'm_product_id';
  vitals = [{'temp':'26.7'}, {'bp':'104/72'}, {'weight':'67'}, {'pulse':'55'}];
  
  constructor() { }

  ngOnInit() {}

  persist(){
    console.log(`Data: ${this.p_visit_id}, ${this.notes}, ${this.text} `)
  }

}
