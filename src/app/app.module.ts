import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { HttpModule } from '@angular/http';

import {MatInputModule, MatIconModule, MatExpansionModule, MatDatepickerModule, MatSelectModule, MatButtonModule, MdNativeDateModule} from '@angular/material';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import { Observable } from 'rxjs/Observable';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule, AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
import { AngularFireAuthModule, AngularFireAuth } from 'angularfire2/auth';

import { ImageCropperComponent, CropperSettings } from 'ng2-img-cropper';

import { environment } from '../environments/environment'

import { AppComponent } from './app.component';
import { LoginComponent } from './login.component';
import { ContactsManagerComponent } from './contacts-manager.component';

import { ContactService } from './contact.service';
import { LoginService } from './login.service';

import * as firebase from 'firebase/app';

@NgModule({
  declarations: [
    AppComponent,
    ImageCropperComponent,
    ContactsManagerComponent,
    LoginComponent
  ],
  imports: [
    AngularFireModule.initializeApp(environment.firebase, 'app-root'),
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    BrowserModule,
    HttpModule,
    MatIconModule,
    FormsModule,
    MatButtonModule,
    MatInputModule,
    MatDatepickerModule,
    MatExpansionModule,
    MatSelectModule,
    MdNativeDateModule,
    BrowserAnimationsModule,
    RouterModule.forRoot([
      { 
        path: 'login',
        component: LoginComponent
      },
      {
        path: 'dashboard',
        component: ContactsManagerComponent
      },
      {
        path: '',
        redirectTo: '/login',
        pathMatch: 'full'
      }
    ])
  ],
  providers: [
    MdNativeDateModule,
    ContactService,
    LoginService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
