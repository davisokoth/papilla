import { Component, OnInit, ViewEncapsulation, ViewContainerRef } from '@angular/core';
import { Overlay, OverlayState, ComponentPortal } from '@angular/material';
import { OverlayComponent } from '../shared/overlay/overlay.component';
// import { PatientService } from '../services/patient.service';
import { VisitService } from '../services/visit.service';
import { PatientVisitModel } from '../models/patientvisit';

@Component({
  selector: 'app-consultation',
  templateUrl: './consultation.component.html',
  styleUrls: ['./consultation.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class ConsultationComponent implements OnInit {

  patient: PatientVisitModel;
  v_id = 54;
  visits: PatientVisitModel[] = [];

  constructor(
    public overlay: Overlay,
    public viewContainerRef: ViewContainerRef,
    // public patientService: PatientService,
    public visitService: VisitService
  ) {
    visitService.getVisit(this.v_id).subscribe(
      data => {
        this.patient = data[0];
        this.getHistory();
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

    // Davis: Quick hack to allow me to pass info to the overlay. Not sure if this is the most optimal way :|
    // The record id immediately destroyed from localStorage by OverlayComponent
    localStorage.setItem('overlay_c_form_id', '29');

    let overlayRef = this.overlay.create(config);
    overlayRef.attach(new ComponentPortal(OverlayComponent, this.viewContainerRef));
  }

  getHistory() {
    this.visitService.getVisits(this.patient.c_patient_id).subscribe(
      data => {
        this.visits = data;
      },
      error => {
        console.log(error);
      });
  }

}
