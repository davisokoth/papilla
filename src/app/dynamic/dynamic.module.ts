import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
// import { FormGroup, FormControl, Validators, FormBuilder }  from '@angular/forms';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { QuestionControlService }    from '../services/question-control.service';
import { QuestionService } from '../services/question.service';
import { FormService } from '../services/form.service';
import { LoggedService } from '../services/logged.service';
import { PatientService } from '../services/patient.service';
import { VisitService } from '../services/visit.service';
import { DynamicComponent } from './dynamic.component';
import { DynaformComponent } from '../dynaform/dynaform.component';
import { PrintComponent } from '../print/print.component';
import { FormElementComponent } from '../form-element/form-element.component';
import { OverlayComponent } from '../shared/overlay/overlay.component';
import { ConsultationComponent } from '../consultation/consultation.component';
import {MaterialModule, OVERLAY_PROVIDERS} from '@angular/material';
import { FlexLayoutModule } from '@angular/flex-layout';


@NgModule({
    imports: [ CommonModule, RouterModule, FormsModule, ReactiveFormsModule, MaterialModule, FlexLayoutModule ],
    providers: [ FormService, QuestionControlService, QuestionService, LoggedService, OVERLAY_PROVIDERS, PatientService,
     VisitService ],
    declarations: [DynamicComponent, DynaformComponent,PrintComponent,FormElementComponent, ConsultationComponent, OverlayComponent],
    exports: [ DynamicComponent, DynaformComponent,PrintComponent,FormElementComponent, ConsultationComponent ],
    entryComponents: [ OverlayComponent ]
})

export class DynamicModule { }
