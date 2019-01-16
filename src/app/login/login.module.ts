import { NgModule } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { LoginPage } from './login.page';

@NgModule({
  imports: [IonicModule, CommonModule, FormsModule, RouterModule.forChild([{ path: '', component: LoginPage }])],
  declarations: [LoginPage],
})
export class LoginPageModule {}
