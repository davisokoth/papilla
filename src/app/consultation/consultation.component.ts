import { Component, OnInit, ViewEncapsulation, ViewContainerRef } from '@angular/core';
import { Overlay, OverlayState, ComponentPortal } from '@angular/material';
import { OverlayComponent } from '../shared/overlay/overlay.component';
import { PatientService } from '../services/patient.service';
import { VisitService } from '../services/visit.service';
import { PatientModel } from '../models/patient';
import { VisitModel } from '../models/visit';

@Component({
  selector: 'app-consultation',
  templateUrl: './consultation.component.html',
  styleUrls: ['./consultation.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class ConsultationComponent implements OnInit {

  patient: PatientModel;
  p_id = 52;
  visits: VisitModel[] = [];

  constructor(
    public overlay: Overlay,
    public viewContainerRef: ViewContainerRef,
    public patientService: PatientService,
    public visitService: VisitService
  ) {
    patientService.getPatientModel(this.p_id).subscribe(
      data => {
        this.patient = data[0];
      },
      error => {
        console.log(error);
      });
    
    visitService.getVisits(this.p_id).subscribe(
      data => {
        this.visits = data;
      },
      error => {
        console.log(error);
      });
  }

  ngOnInit() {
  }

  openRotiniPanel() {
    let config = new OverlayState();

    config.positionStrategy = this.overlay.position().global().left('0px').top('0px');

    let overlayRef = this.overlay.create(config);
    overlayRef.attach(new ComponentPortal(OverlayComponent, this.viewContainerRef));
  }

}
