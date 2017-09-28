import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {MatInputModule, MatDatepickerModule, MatSelectModule, MdNativeDateModule} from '@angular/material';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    MatInputModule,
    MatDatepickerModule,
    MatSelectModule,
    MdNativeDateModule,
    BrowserAnimationsModule
  ],
  providers: [MdNativeDateModule],
  bootstrap: [AppComponent]
})
export class AppModule { }
