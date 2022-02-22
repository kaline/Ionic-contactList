import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FormCoursePage } from './form-course.page';

const routes: Routes = [
  {
    path: '',
    component: FormCoursePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FormCoursePageRoutingModule {}
