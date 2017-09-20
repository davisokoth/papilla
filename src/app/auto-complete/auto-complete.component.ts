import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
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
  @Input() minSearchLength: number;

  @Output() emitProduct: EventEmitter<any> = new EventEmitter<any>();

  myControl = new FormControl();
  searchText: string;
  options: any[];
  filteredOptions: Observable<any[]>;
   
  searchStr: string;
  captain: string;
  dataService: CompleterData;

  constructor(
    private uService: UniversalService, 
    private completerService: CompleterService
  ) {}

  ngOnInit() {
    if(this.minSearchLength === undefined)
      this.minSearchLength = 3;
    this.getData();
  }

  public selected(selected: any) {
      if(selected){
        this.emitProduct.emit(selected.originalObject);
        console.log(this.primarykey + ': ' + selected.originalObject[this.primarykey]);
        this.getData();
      }
   }

   private getData(){
      this.uService.search(this.endpoint).subscribe(data => {
        this.options = data;
        this.dataService = this.completerService.local(this.options, 'name', 'name');
      });
   }
}