import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FormCoursePageRoutingModule } from './form-course-routing.module';

import { FormCoursePage } from './form-course.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FormCoursePageRoutingModule
  ],
  declarations: [FormCoursePage]
})
export class FormCoursePageModule {}
