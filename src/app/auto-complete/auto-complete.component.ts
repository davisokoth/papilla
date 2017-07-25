import { Component, Input, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { UniversalService } from '../services/universal.service';
import { Observable } from 'rxjs/Observable';
import { User } from '../models/user';
import { CompleterService, CompleterData } from 'ng2-completer';

@Component({
  selector: 'app-autocomplete',
  templateUrl: './auto-complete.component.html',
  styleUrls: ['./auto-complete.component.css']
})
export class AutoCompleteComponent {
  @Input() endpoint: string;
  @Input() suggestions: any[];
  @Input() name: string;
  @Input() label: string;
  @Input() datasource: string;
  @Input() primarykey: string;

  myControl = new FormControl();
  searchText: string;
  options: any[];
  filteredOptions: Observable<any[]>;
   
  protected searchStr: string;
  protected captain: string;
  protected dataService: CompleterData;

   constructor(private uService: UniversalService, private completerService: CompleterService) {
     // this.dataService = completerService.local(this.searchData, 'color', 'color');
     console.log(this.label);
   }

   ngOnInit() {
     this.uService.search(this.endpoint).subscribe(data => {
      this.options = data;
      this.dataService = this.completerService.local(this.options, 'name', 'name');
    });
   }

   public selected(selected: any) {
      console.log(selected.originalObject[this.primarykey]);
   }
}