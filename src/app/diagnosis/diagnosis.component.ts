import { Component, Input, OnInit } from '@angular/core';
import { UniversalService } from '../services/universal.service';
import { AutoCompleteComponent } from '../auto-complete/auto-complete.component';

@Component({
  selector: 'app-diagnosis',
  templateUrl: './diagnosis.component.html',
  styleUrls: ['./diagnosis.component.css']
})
export class DiagnosisComponent implements OnInit {

  @Input() p_visit_id: number;
  @Input() c_patient_id: number;
  
  notes: string;

  dText: string;
  c_disease_id: number;
  
  dDataUrl = 'v_diagnosiss';
  dPostUrl = 'p_diagnosiss';
  
  dEndpoint = 'c_diseases';
  dPlaceholder = 'Disease';
  dKey = 'c_disease_id';

  diagnoses = [];
  newDiagnoses = [];
  displayObjects = [];
  disease: any;
  
  constructor(private uService: UniversalService) { }

  ngOnInit() {
    this.getDiagnoses();
  }

  dSelected(disease: any) {
    disease ? this.c_disease_id = disease['c_disease_id'] : this.c_disease_id = 0;
    this.disease = disease;
  }

  getDiagnoses() {
    console.log(this.p_visit_id);
    this.uService.search(this.dDataUrl + '?filter[where][visitid]=' + this.p_visit_id)
      .subscribe(data => {
        this.diagnoses = data;
    });
  }

  persist(){
    let displayObject = {
      'disease': this.disease.name,
      'notes': this.notes
    };
    this.displayObjects.push(displayObject);
    let item = JSON.stringify({
      'createdby': 1,
      'updatedby': 1,
      'c_facility_id': 1,
      'c_patient_id': this.c_patient_id,
      'c_disease_id': this.c_disease_id,
      'notes': this.notes,
      'p_visit_id': this.p_visit_id
    });
    this.uService.doPost(item, 'p_diagnosiss').subscribe(
      data => {
          console.log(data);
          // this.createBillLine();
        },
        error => {
          console.log(error);
        }
    );
    this.clearScreen();
  }

  clearScreen(){
    this.dText = '';
  }
}
