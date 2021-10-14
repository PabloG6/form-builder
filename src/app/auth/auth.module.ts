import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SignupComponent } from '../signup/signup.component';
import { LoginComponent } from '../login/login.component';

import { AuthRoutingModule } from './auth-routing.module';
import { MatModule } from '../mat/mat.module';
import { ReactiveFormsModule } from '@angular/forms';
import { SettingsComponent } from '../settings/settings.component';
import { HfxModule } from '../hfx/hfx.module';

@NgModule({
  declarations: [
    SignupComponent,
    LoginComponent,
    SettingsComponent
  ],
  imports: [
    CommonModule,
    AuthRoutingModule,
    ReactiveFormsModule,
    HfxModule,
    MatModule,
  ]
})
export class AuthModule { }
