import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
// import { FormGroup, FormControl, Validators, FormBuilder }  from '@angular/forms';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { MaterialModule, MdNativeDateModule, OVERLAY_PROVIDERS } from '@angular/material';
import { FlexLayoutModule } from '@angular/flex-layout';

import { QuestionControlService }    from '../services/question-control.service';
import { QuestionService } from '../services/question.service';
import { FormService } from '../services/form.service';
import { LoggedService } from '../services/logged.service';
import { PatientService } from '../services/patient.service';
import { VisitService } from '../services/visit.service';
import { UniversalService } from '../services/universal.service';

import { ConsultationComponent } from '../consultation/consultation.component';
import { DynamicComponent } from './dynamic.component';
import { DynaformComponent } from '../dynaform/dynaform.component';
import { FormElementComponent } from '../form-element/form-element.component';
import { OverlayComponent } from '../shared/overlay/overlay.component';
import { QueueComponent } from '../queue/queue.component';
import { AutoCompleteComponent } from '../auto-complete/auto-complete.component';
import { CompleteCmpMd } from '../complete-cmp-md/complete-cmp-md.component';
import { VitalsComponent } from '../vitals/vitals.component';
import { Ng2CompleterModule } from 'ng2-completer';

@NgModule({
    imports: [ 
        CommonModule, RouterModule, FormsModule, ReactiveFormsModule, MaterialModule, 
        FlexLayoutModule, MdNativeDateModule, Ng2CompleterModule ],
    providers: [ FormService, QuestionControlService, QuestionService, LoggedService, OVERLAY_PROVIDERS, PatientService,
        UniversalService, VisitService ],
    declarations: [
        AutoCompleteComponent, CompleteCmpMd,
        DynamicComponent, DynaformComponent, FormElementComponent, ConsultationComponent,
        OverlayComponent, QueueComponent, VitalsComponent
    ],
    exports: [
        AutoCompleteComponent, CompleteCmpMd,
        DynamicComponent, DynaformComponent, FormElementComponent, ConsultationComponent,
        QueueComponent, VitalsComponent
    ],
    entryComponents: [ OverlayComponent ]
})

export class DynamicModule { }
