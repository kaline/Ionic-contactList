import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RecoverUserPage } from './recover-user.page';

const routes: Routes = [
  {
    path: '',
    component: RecoverUserPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RecoverUserPageRoutingModule {}
