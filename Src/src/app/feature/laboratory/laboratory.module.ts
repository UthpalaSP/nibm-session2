import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TestComponent } from './test/test.component';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { ResultComponent } from './result/result.component';

const routes: Routes = [
  {
    path: '', component: TestComponent
  },
  {
    path: 'result', component: ResultComponent
  }
];

@NgModule({
  declarations: [TestComponent, ResultComponent],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class LaboratoryModule { }
