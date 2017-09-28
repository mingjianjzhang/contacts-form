import { Component, OnInit } from '@angular/core';
import CountryList from "country-list";
import us from 'us';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Contact Formddddd';
  countries = CountryList().getData();
  states = us.STATES
  ngOnInit(): void {
  	console.log(this.countries);
  	console.log(this.states);
  }
}
