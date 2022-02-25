import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FormAddressPageRoutingModule } from './form-address-routing.module';

import { FormAddressPage } from './form-address.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FormAddressPageRoutingModule
  ],
  declarations: [FormAddressPage]
})
export class FormAddressPageModule {}
