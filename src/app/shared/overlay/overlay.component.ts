import { Component, OnInit } from '@angular/core';
// import { DynamicComponent } from '../../dynamic/dynamic.component';

@Component({
  selector: 'app-overlay',
  templateUrl: './overlay.component.html',
  styleUrls: ['./overlay.component.css'],
})
export class OverlayComponent implements OnInit {

  showPanel = true;
  c_form_id: number;

  constructor() { }

  ngOnInit() {
    this.c_form_id = parseInt(localStorage.getItem('overlay_c_form_id'), 10);
    localStorage.removeItem('overlay_c_form_id');
  }

  closePanel() {
    this.showPanel = false;
  }

}
