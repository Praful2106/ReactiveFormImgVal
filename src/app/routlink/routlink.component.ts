import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-routlink',
  templateUrl: './routlink.component.html',
  styleUrls: ['./routlink.component.css']
})
export class RoutlinkComponent implements OnInit {
  constructor() { }
  public registerForm:any;

  ngOnInit(): void {
    this.registerForm = new FormGroup({
      "FullName":new FormControl(null,[Validators.required,Validators.pattern('[a-zA-Z  ]*')]),
      "UserName":new FormControl(null,[Validators.required,Validators.email]),
      "Birth":new FormControl(null,[Validators.required]),
      "Gender":new FormControl(null,[Validators.required]),
      "Blood":new FormControl(null,[Validators.required]),
      "Email":new FormControl(null,[Validators.required,Validators.email]),
      "Mobile":new FormControl(null,[Validators.required,Validators.pattern('[0-9]*'),Validators.minLength(10),Validators.maxLength(12)]),
      "Address":new FormControl(null,[Validators.required]),
      "City":new FormControl(null,[Validators.required,Validators.pattern('[a-zA-Z]*')]),
      "State":new FormControl(null,[Validators.required,Validators.pattern('[a-zA-Z]*')]),
      "Zip":new FormControl(null,[Validators.required,Validators.pattern('[0-9]*')]),
      "Country":new FormControl(null,[Validators.required,Validators.pattern('[a-zA-Z]*')]),
"img":new FormControl('')
    })
  }
  submitData()
  {
    console.log(this.registerForm.value);
    if(this.registerForm.valid)
    {
      alert(`Thank You ${this.registerForm.value.FullName}`);
      this.registerForm.reset();//reset
    }
  }
  get FullName() {return this.registerForm.get('FullName');}
  get UserName() {return this.registerForm.get('UserName');}
  get Birth() {return this.registerForm.get('Birth');}
  get Gender() {return this.registerForm.get('Gender');}
  get Blood() {return this.registerForm.get('Blood');}
  get Email() {return this.registerForm.get('Email');}
  get Mobile() {return this.registerForm.get('Mobile');}
  get Address() {return this.registerForm.get('Address');}
  get City() {return this.registerForm.get('State');}
  get State() {return this.registerForm.get('FullName');}
  get Zip() {return this.registerForm.get('Zip');}
  get Country() {return this.registerForm.get('Country');}
  
  
  }
  

