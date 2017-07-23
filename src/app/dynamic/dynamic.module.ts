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
// import { SelectComponent } from '../select/select.component';
// import { TextComponent } from '../text/text.component';
// import { TextAreaComponent } from '../textarea/textarea.component';


@NgModule({
    imports: [ 
        CommonModule, RouterModule, FormsModule, ReactiveFormsModule, MaterialModule, 
        FlexLayoutModule, MdNativeDateModule ],
    providers: [ FormService, QuestionControlService, QuestionService, LoggedService, OVERLAY_PROVIDERS, PatientService,
     UniversalService, VisitService ],
    declarations: [
        AutoCompleteComponent,
        DynamicComponent, DynaformComponent, FormElementComponent, ConsultationComponent,
        OverlayComponent, QueueComponent
    ],
    exports: [
        AutoCompleteComponent,
        DynamicComponent, DynaformComponent, FormElementComponent, ConsultationComponent,
        QueueComponent
    ],
    entryComponents: [ OverlayComponent ]
})

export class DynamicModule { }
