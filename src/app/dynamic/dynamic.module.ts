import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
// import { FormGroup, FormControl, Validators, FormBuilder }  from '@angular/forms';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { MaterialModule, MdNativeDateModule, OVERLAY_PROVIDERS } from '@angular/material';
import { FlexLayoutModule } from '@angular/flex-layout';
// import { ConsultationModule } from '../consultation/consultation.module';

import { QuestionControlService }    from '../services/question-control.service';
import { QuestionService } from '../services/question.service';
import { FormService } from '../services/form.service';
import { LoggedService } from '../services/logged.service';
import { PatientService } from '../services/patient.service';
import { VisitService } from '../services/visit.service';
import { UniversalService } from '../services/universal.service';

import { DynamicComponent } from './dynamic.component';
import { DynaformComponent } from '../dynaform/dynaform.component';
import { FormElementComponent } from '../form-element/form-element.component';
import { OverlayComponent } from '../shared/overlay/overlay.component';
import { QueueComponent } from '../queue/queue.component';
import { Ng2CompleterModule } from 'ng2-completer';
import { AutoCompleteComponent } from '../auto-complete/auto-complete.component';

import { ConsultationComponent } from '../consultation/consultation.component';
import { PrescriptionComponent } from '../prescription/prescription.component';
import { VitalsComponent } from '../vitals/vitals.component';
import { DiagnosisComponent } from '../diagnosis/diagnosis.component';

import { PrintComponent } from '../print/print.component';
import { PrintcomponentComponent } from '../printcomponent/printcomponent.component';
import { CashierComponent } from '../cashier/cashier.component';
import { CashierserviceService } from '../services/cashierservice.service';
import { SelectedbillComponent } from '../selectedbill/selectedbill.component';
import { DispensingComponent } from '../dispensing/dispensing.component';

@NgModule({
    imports: [ 
        CommonModule, RouterModule, FormsModule, ReactiveFormsModule, MaterialModule, 
        FlexLayoutModule, MdNativeDateModule, Ng2CompleterModule
    ],
    providers: [ FormService, QuestionControlService, QuestionService, LoggedService, 
        OVERLAY_PROVIDERS, PatientService, UniversalService, VisitService , CashierserviceService
    ],
    declarations: [
        DynamicComponent, DynaformComponent, FormElementComponent, VitalsComponent, 
        OverlayComponent, QueueComponent, ConsultationComponent, PrescriptionComponent,
        AutoCompleteComponent, PrintComponent, PrintcomponentComponent, CashierComponent,
        SelectedbillComponent, DiagnosisComponent, DispensingComponent
    ],
    exports: [
        DynamicComponent, DynaformComponent, FormElementComponent, VitalsComponent,
        QueueComponent, ConsultationComponent, PrescriptionComponent, AutoCompleteComponent,
        PrintComponent, PrintcomponentComponent, CashierComponent, SelectedbillComponent,
    ],
    entryComponents: [ OverlayComponent ]
})

export class DynamicModule { }
