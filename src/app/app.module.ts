import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MdButtonModule, MdInputModule, MdCheckboxModule, MdListModule } from '@angular/material';

import { AppComponent } from './app.component';
import { routes } from './app.routes';
import { LoginModule } from './login/login.module';
import { DynamicModule } from './dynamic/dynamic.module';
import { SignupModule } from './signup/signup.module';
import { DashboardModule } from './dashboard/dashboard.module';
import { CompleteCmpMd } from './complete-cmp-md/complete-cmp-md.component';
import { MyprintComponent } from './myprint/myprint.component';
import { SelectComponent } from './select/select.component';
import { TextAreaComponent } from './textarea/textarea.component';
import { TextComponent } from './text/text.component';

import { MenuService } from './services/menu.service';

@NgModule({
  declarations: [
    AppComponent, MyprintComponent, SelectComponent, TextAreaComponent, CompleteCmpMd, TextComponent
  ],
  imports: [
    BrowserAnimationsModule, BrowserModule, DynamicModule, FormsModule, HttpModule, ReactiveFormsModule,
    RouterModule.forRoot(routes), LoginModule, SignupModule, DashboardModule
  ],
  providers: [ MenuService],
  bootstrap: [AppComponent]
})
export class AppModule { }
