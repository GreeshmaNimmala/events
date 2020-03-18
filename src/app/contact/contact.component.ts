import { Component, OnInit } from '@angular/core';
import {FormGroup, FormControl, Validators} from '@angular/forms'

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  contactForm:FormGroup;

  constructor() { }

  ngOnInit(){
    this.contactForm=new FormGroup({
      'name':new FormControl(null,Validators.required),
      'email':new FormControl(null, Validators.required),
      'mobileNumber':new FormControl(null,[Validators.required,Validators.minLength(10)]),
      'message':new FormControl(null)
    });
  }

  onSubmit(){
    //document.write("We will contact you very soon");
    document.write("Thank you,We will reach you very soon");
  }

}
