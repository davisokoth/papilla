import { Component, Input, OnInit } from '@angular/core';
import { UniversalService } from '../services/universal.service';

@Component({
  selector: 'app-autocomplete',
  templateUrl: './auto-complete.component.html',
  styleUrls: ['./auto-complete.component.css']
})
export class AutoCompleteComponent implements OnInit {

  @Input() endpoint: string;
  @Input() suggestions: any[];
  @Input() name: string;
  @Input()  label: string;
  
  text: string;
  results: any;

  constructor(private uService: UniversalService) { }

  ngOnInit() {
    console.log(this.endpoint);
    this.uService.search(this.endpoint).subscribe(data => {
      this.results = data;
    });
  }

  search(event) {
    alert('Here...');
    
  }

}
