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
  ) {}

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.c_node_id = params['id'];
      this.visitService.getNodeVisits(this.c_node_id).subscribe(
        data => {
          this.queue = data;
        },
        error => {
          console.log(error);
        }
      );
    });
  }

  openRecord(p_visit: any) {
    this.router.navigate([`/dashboard/consultation/${p_visit.p_visit_id}`]);
  }

}
