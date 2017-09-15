import { Component, OnInit, ViewEncapsulation, ViewContainerRef, Input } from '@angular/core';
import { Overlay, OverlayState, ComponentPortal } from '@angular/material';
import { OverlayComponent } from '../shared/overlay/overlay.component';
import { Router, ActivatedRoute } from '@angular/router';
import { VisitService } from '../services/visit.service';
import { PatientVisitModel } from '../models/patientvisit';
import { VitalsComponent } from '../vitals/vitals.component';
import { DiagnosisComponent } from '../diagnosis/diagnosis.component';

@Component({
  selector: 'app-consultation',
  templateUrl: './consultation.component.html',
  styleUrls: ['./consultation.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class ConsultationComponent implements OnInit {

  patient: PatientVisitModel;
  p_visit_id: number;
  visits: PatientVisitModel[] = [];

  constructor(
    private overlay: Overlay,
    private viewContainerRef: ViewContainerRef,
    private visitService: VisitService,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.p_visit_id = this.route.snapshot.params['p_visit_id'];
    console.log("Visit: " + this.p_visit_id);
    this.visitService.getVisit(this.p_visit_id).subscribe(
      data => {
        this.patient = data[0];
        console.log(this.patient);
        this.getHistory();
      },
      error => {
        console.log(error);
      });
  }

  openRotiniPanel() {
    let config = new OverlayState();

    config.positionStrategy = this.overlay.position().global().left('0px').top('0px');

    // Davis: Quick hack to allow me to pass info to the overlay. Not sure if this is the most optimal way :|
    // The record id immediately destroyed from localStorage by OverlayComponent
    localStorage.setItem('overlay_c_form_id', '36');
    localStorage.setItem('overlay_hasparent', 'Y');
    localStorage.setItem('overlay_parent_id', this.p_visit_id + '');

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
