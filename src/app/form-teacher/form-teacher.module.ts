import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FormTeacherPageRoutingModule } from './form-teacher-routing.module';

import { FormTeacherPage } from './form-teacher.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FormTeacherPageRoutingModule
  ],
  declarations: [FormTeacherPage]
})
export class FormTeacherPageModule {}
