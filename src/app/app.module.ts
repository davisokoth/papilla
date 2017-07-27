import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { routes } from './app.routes';
import { LoginModule } from './login/login.module';
import { DynamicModule } from './dynamic/dynamic.module';
import { SignupModule } from './signup/signup.module';
import { DashboardModule } from './dashboard/dashboard.module';
import { MenuService } from './services/menu.service';
import { PrintComponent } from './print/print.component';
import { PrintcomponentComponent } from './printcomponent/printcomponent.component';
import { CashierComponent } from './cashier/cashier.component';
import {CashierserviceService} from './services/cashierservice.service';
import { SelectedbillComponent } from './selectedbill/selectedbill.component';




@NgModule({
  declarations: [
    AppComponent,
    PrintcomponentComponent,
    CashierComponent,
    SelectedbillComponent,

     

  ],
  imports: [
    BrowserAnimationsModule,
    BrowserModule,    
    DynamicModule,
    FormsModule,
    HttpModule,
    ReactiveFormsModule,
    RouterModule.forRoot(routes),
    LoginModule,
    SignupModule,
    DashboardModule
  ],
  providers: [ MenuService,CashierserviceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
