import { Component, OnInit, ViewChild } from '@angular/core';
import { ImageCropperComponent, CropperSettings } from 'ng2-img-cropper';
import {NgForm} from '@angular/forms';
import CountryList from "country-list";
import us from 'us';

import { ContactService } from './contact.service';
import { LoginService } from './login.service';
import { Contact } from './contact';
@Component({
  selector: 'contacts-manager',
  templateUrl: './contacts-manager.component.html',
  styleUrls: ['./contacts-manager.component.scss']
})

export class ContactsManagerComponent implements OnInit {

  user_id:string;
  title = 'Contact Formddddd';
  countries = CountryList().getData();
  states = us.STATES
  showCropper = false;
  data:any;
  contacts:any;
  cropperSettings: CropperSettings;

  model = Contact

  submitted = false;

  constructor(private contactService: ContactService, private loginService: LoginService) {
      this.cropperSettings = new CropperSettings();
      this.cropperSettings.noFileInput = true;
      this.data = {};
  }
     
  onSubmit(contactForm){
    console.log(contactForm.value, "what shows");
    contactForm.value.user_id = this.user_id;
    console.log(contactForm.value, "modified with user_id");
    this.contactService.createContact(contactForm.value, (contact) => {
      this.contacts.push(contact);
    });
  }

  // TODO: Remove this when we're done
  get diagnostic() { return JSON.stringify(this.model); };
 
  @ViewChild('cropper', undefined)
  cropper:ImageCropperComponent;
  

   
  fileChangeListener($event) {
      this.showCropper = true;
      var image:any = new Image();
      var file:File = $event.target.files[0];
      var myReader:FileReader = new FileReader();
      var that = this;
      myReader.onloadend = function (loadEvent:any) {
          image.src = loadEvent.target.result;
          that.cropper.setImage(image);
   
      };
   
      myReader.readAsDataURL(file);
  }
  ngOnInit(): void {
    this.loginService.getCurrentUser(user_id => {
      this.user_id = user_id;
      console.log(user_id, "here's my user_id");
      this.contactService.getContacts(user_id, (contacts)=>{
        this.contacts = contacts;
        console.log(this.contacts, "this callback in component");
      })
    })
  }
}