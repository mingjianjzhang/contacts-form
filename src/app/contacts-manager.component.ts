import { Component, OnInit, ViewChild } from '@angular/core';
import { ImageCropperComponent, CropperSettings } from 'ng2-img-cropper';
import {NgForm} from '@angular/forms';
import CountryList from "country-list";
import us from 'us';
import dataURLToBlob from 'blueimp-canvas-to-blob';
import { ContactService } from './contact.service';
import { LoginService } from './login.service';
import { UploadService } from './upload.service';
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
  img_blob: any;
  img_url:string;
  image_src: any;
  model = Contact;

  submitted = false;

  constructor(private contactService: ContactService, private loginService: LoginService, private uploadService: UploadService) {
      this.cropperSettings = new CropperSettings();
      this.cropperSettings.croppedWidth =150;
      this.cropperSettings.croppedHeight = 150;
      this.cropperSettings.canvasWidth = 150;
      this.cropperSettings.canvasHeight = 150;
      this.cropperSettings.noFileInput = true;
      this.data = {};
      this.image_src = "https://myspace.com/common/images/user.png";
  }
     
  onSubmit(contactForm){
    if (this.img_blob){
      this.uploadService.uploadFile(this.img_blob, url => {
        contactForm.value.image_url = url;
      });
    }
    contactForm.value.user_id = this.user_id;
    this.contactService.createContact(contactForm.value, (contact) => {
      this.contacts.push(contact);
    });
  }

  // TODO: Remove this when we're done
  get diagnostic() { return JSON.stringify(this.model); };
 
  convertDate(date){
    return "Yes Sir"
  }

  hideCropper(){
    this.showCropper = false;
    this.image_src = this.data.image;
    this.img_blob = dataURLToBlob(this.data.image);
    


    // var image_file = new FormData();
    // image_file.append("image", this.img_blob);
    // console.log(image_file.get('image'), "should have stuff appended??")
    // this.contactService.uploadProfilePic(image_file);
    this.data = {};
  }

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
      this.contactService.getContacts(user_id, (contacts)=>{
        this.contacts = contacts;
      })
    })
  }
}
