import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { AuthenticationService } from '../services/authentication.service';
import { LoggedService } from '../services/logged.service';
import { LoginComponent } from './login.component';

@NgModule({
    imports: [CommonModule, RouterModule, FormsModule],
    providers: [AuthenticationService, LoggedService],
    declarations: [LoginComponent],
    exports: [LoginComponent]
})

export class LoginModule { }
