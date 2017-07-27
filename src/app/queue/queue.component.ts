import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Http } from '@angular/http';
import { Router, ActivatedRoute } from '@angular/router';
import { VisitService } from '../services/visit.service';
import { PatientVisitModel } from '../models/patientvisit';

@Component({
  selector: 'app-queue',
  templateUrl: './queue.component.html',
  styleUrls: ['./queue.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class QueueComponent implements OnInit {

  c_node_id: number = 2; // get from session perharps?
  department: string; // get from session
  queue: PatientVisitModel[] = [];

  constructor(
    public visitService: VisitService,
    private http: Http,
    private route: ActivatedRoute,
    private router: Router
  ) {
    visitService.getNodeVisits(this.c_node_id).subscribe(
      data => {
        this.queue = data;
      },
      error => {
        console.log(error);
      });
  }

  ngOnInit() {
  }

  openRecord(p_visit: any) {
    console.log(p_visit);
    this.router.navigate([`/dashboard/consultation/${p_visit.p_visit_id}`]);
  }

}
