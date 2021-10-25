import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AuthModule } from './auth/auth.module';
import { HttpClientModule } from '@angular/common/http';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { MatModule } from './mat/mat.module';
import { NbEvaIconsModule } from '@nebular/eva-icons';
import { NbThemeModule } from '@nebular/theme';

@NgModule({
  declarations: [
    AppComponent,
    LandingPageComponent,

  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AuthModule,
    NbEvaIconsModule,
    NbThemeModule.forRoot(),
   
    HttpClientModule,
   
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
