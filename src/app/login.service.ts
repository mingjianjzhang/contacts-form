import { Injectable, NgZone } from '@angular/core';
import { Router } from '@angular/router';

import { Http, Headers, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class LoginService {

	constructor(private ngZone: NgZone, private router: Router, private http: Http) { }

	loginUser(user_id, callback){
		console.log(user_id, "am I a real user_id???")
		this.http.post("/api/login", { user_id: user_id }).subscribe(()=>{
			console.log("do we get here in subscribe of loginsuer????")
			console.log(this.router, "is this real");
				this.ngZone.run(()=>{
  				this.router.navigate(['/dashboard']);
  			});
		});
	}

	getCurrentUser(callback){
		this.http.get("/api/current_user").subscribe(data => {
			callback(data.json());
		})
	}

}