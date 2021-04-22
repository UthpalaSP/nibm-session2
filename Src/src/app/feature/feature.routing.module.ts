import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LayoutComponent } from './layout/layout.component';
import { DashboardComponent } from './dashboard/dashboard.component';

const routes: Routes = [
  {
    path: '', component: LayoutComponent,
    children: [
      {
        path: '', component: DashboardComponent
      },
      {
        path: 'lab', loadChildren: () => import('./laboratory/laboratory.module').then(m => m.LaboratoryModule)
      },
      {
        path: 'patient', loadChildren: () => import('./patient/patient.module').then(m => m.PatientModule)
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FeatureRoutingModule { }