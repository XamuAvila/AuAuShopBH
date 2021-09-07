import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { InsertLoginPage } from './insert-login.page';

const routes: Routes = [
  {
    path: '',
    component: InsertLoginPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class InsertLoginPageRoutingModule {}
