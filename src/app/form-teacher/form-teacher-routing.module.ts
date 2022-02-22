import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FormTeacherPage } from './form-teacher.page';

const routes: Routes = [
  {
    path: '',
    component: FormTeacherPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FormTeacherPageRoutingModule {}
