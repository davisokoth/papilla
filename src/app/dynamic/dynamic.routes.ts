import { Routes } from '@angular/router';
import { DynamicComponent } from './dynamic.component';

export const DynamicRoutes: Routes = [
    {
      path: 'dynamic/:c_form_id', component: DynamicComponent
    }
];
