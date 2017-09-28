import { Injectable } from '@angular/core';

import { Http, Headers, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class ContactService {

	constructor(private http: Http) { }

	getContacts(user_id, callback){
		this.http.get(`/api/contacts/${user_id}`).subscribe((data) => {
			console.log(data.json(), "well something is coming in right?");
			callback(data.json());
		});
	}

	createContact(contact, callback) {
		this.http.post("/api/contacts", contact).subscribe((data) => {
			callback(data.json());
		});
	}

}