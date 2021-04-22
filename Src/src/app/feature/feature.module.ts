import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutComponent } from './layout/layout.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { FeatureRoutingModule } from './feature.routing.module';
import { ChartsModule } from 'ng2-charts';

@NgModule({
  declarations: [LayoutComponent, DashboardComponent],
  imports: [
    CommonModule,
    FeatureRoutingModule,
    ChartsModule
  ]
})
export class FeatureModule { }
