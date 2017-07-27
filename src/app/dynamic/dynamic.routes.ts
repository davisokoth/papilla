import { Routes } from '@angular/router';
import { DynamicComponent } from './dynamic.component';
import { ConsultationComponent } from '../consultation/consultation.component';
import { CashierComponent } from '../cashier/cashier.component';
import { QueueComponent } from '../queue/queue.component';

export const DynamicRoutes: Routes = [
  { path: 'dynamic/:c_form_id', component: DynamicComponent },
  { path: 'consultation/:p_visit_id', component: ConsultationComponent },
  { path: 'cashier', component: ConsultationComponent },
  { path: 'queue', component: QueueComponent },
  { path: 'cashier', component: CashierComponent }
];