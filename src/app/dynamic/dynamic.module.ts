import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
// import { FormGroup, FormControl, Validators, FormBuilder }  from '@angular/forms';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { QuestionControlService }    from '../services/question-control.service';
import { QuestionService } from '../services/question.service';
import { FormService } from '../services/form.service';
import { LoggedService } from '../services/logged.service';
import { DynamicComponent } from './dynamic.component';
import { DynaformComponent } from '../dynaform/dynaform.component';
import { FormElementComponent } from '../form-element/form-element.component';

@NgModule({
    imports: [CommonModule, RouterModule, FormsModule, ReactiveFormsModule],
    providers: [ FormService, QuestionControlService, QuestionService, LoggedService ],
    declarations: [DynamicComponent, DynaformComponent, FormElementComponent],
    exports: [DynamicComponent, DynaformComponent, FormElementComponent]
})

export class DynamicModule { }
