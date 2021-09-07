import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { InsertLoginPageRoutingModule } from './insert-login-routing.module';

import { InsertLoginPage } from './insert-login.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    InsertLoginPageRoutingModule
  ],
  declarations: [InsertLoginPage]
})
export class InsertLoginPageModule {}
