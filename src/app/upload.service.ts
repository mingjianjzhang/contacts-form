import { Injectable, Inject } from '@angular/core';
import { Upload } from './upload';

import { FirebaseApp } from 'angularfire2'
import 'firebase/storage';
import { Observable } from 'rxjs/Observable';


@Injectable()
export class UploadService {
	
	constructor(private fb: FirebaseApp) {}


	async uploadFile(blob, callback){
		let storageRef = this.fb.storage().ref();
		let snapshot = await storageRef.child("img-"+Date.now()).put(blob)
		callback(snapshot.downloadURL);
	}
}