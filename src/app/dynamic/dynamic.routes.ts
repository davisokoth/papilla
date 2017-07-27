import { Routes } from '@angular/router';
import { DynamicComponent } from './dynamic.component';
import { ConsultationComponent } from '../consultation/consultation.component';
import { CashierComponent } from '../cashier/cashier.component';

export const DynamicRoutes: Routes = [
  { path: 'dynamic/:c_form_id', component: DynamicComponent },
  { path: 'consultation', component: ConsultationComponent },
  { path: 'cashier', component: CashierComponent }
];
