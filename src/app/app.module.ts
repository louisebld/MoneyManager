import { LOCALE_ID, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { SigninComponent } from './signin/signin.component';
import { DepenseComponent } from './depense/depense.component';
import { TopbarComponent } from './topbar/topbar.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatSliderModule } from '@angular/material/slider';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {registerLocaleData} from '@angular/common';
import * as fr from '@angular/common/locales/fr';

@NgModule({
  declarations: [
    AppComponent,
    SigninComponent,
    DepenseComponent,
    TopbarComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatSliderModule,
    MatButtonModule,
    MatIconModule
  ],
  providers: [
    { provide: LOCALE_ID, useValue: 'fr-FR'}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { 
  constructor() {
    registerLocaleData(fr.default);  }
}
