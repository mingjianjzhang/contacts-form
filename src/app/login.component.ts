import { Component, NgZone } from '@angular/core';

import { Observable } from 'rxjs/Observable';
import { AngularFireAuth } from 'angularfire2/auth';

import * as firebase from 'firebase';

import { LoginService } from './login.service';

@Component({
  selector: 'login-form',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})

export class LoginComponent { 
	user: Observable<firebase.User>;
  constructor(private ngZone: NgZone, private afAuth: AngularFireAuth, private loginService: LoginService) {
    this.user = afAuth.authState;
  }
  login() {
    this.afAuth.auth
    	.signInWithPopup(new firebase.auth.GoogleAuthProvider())
    	.then(data => {
    		console.log(data, "here's the sucker who logged in ");
    		this.loginService.loginUser(data.user.uid, ()=> {
    			console.log("is this running?")
    		});
    	});
  }
  logout() {
	   this.afAuth.auth.signOut();
  }
};

