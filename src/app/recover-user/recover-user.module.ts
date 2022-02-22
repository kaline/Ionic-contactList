import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RecoverUserPageRoutingModule } from './recover-user-routing.module';

import { RecoverUserPage } from './recover-user.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RecoverUserPageRoutingModule
  ],
  declarations: [RecoverUserPage]
})
export class RecoverUserPageModule {}
