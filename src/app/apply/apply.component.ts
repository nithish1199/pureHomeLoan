import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-apply',
  templateUrl: './apply.component.html',
  styleUrls: ['./apply.component.css']
})
export class ApplyComponent implements OnInit {
  PersonalDetails=new FormGroup({
    firstName:new FormControl("",[Validators.required]),
    lastName:new FormControl("",[Validators.required]),
    middleName:new FormControl(),
    Email:new FormControl("",[Validators.required,Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$")]),
    Password:new FormControl("", [Validators.required, Validators.pattern("(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&].{8,}")]),
    ConfirmPassword:new FormControl("", [Validators.required]),
    MobileNumber:new FormControl("", [Validators.required, Validators.pattern("^((\\+91-?)|0)?[0-9]{10}$")]),
    DateofBirth:new FormControl(),
    Gender:new FormControl(),
    Nationality:new FormControl(null,[Validators.required]),
    AadharNumber:new FormControl(null,[Validators.required]),
    PanNumber:new FormControl(null,[Validators.required]),
  }
  //{validators:this.passwordMatchValidator}
  );
  constructor() { }

  ngOnInit(): void {
  }

  get firstname()
  {
    return this.PersonalDetails.get('firstName');
  }

  get middlename()
  {
    return this.PersonalDetails.get('middleName');
  }
  get lastname()
  {
    return this.PersonalDetails.get('lastName');
  }
  get email()
  {
    return this.PersonalDetails.get('Email');
  }
  get phonenumber()
  {
    return this.PersonalDetails.get('MobileNumber');
  }
  get password()
  {
    return this.PersonalDetails.get('Password');
  }
  get confirmpassword()
  {
    return this.PersonalDetails.get('ConfirmPassword');
  }
  get gender()
  {
    return this.PersonalDetails.get('Gender');
  }
  get nationality()
  {
    return this.PersonalDetails.get('Nationality');
  }
  get adharnumber()
  {
    return this.PersonalDetails.get('AadharNumber');
  }
  get pannumber()
  {
    return this.PersonalDetails.get('PanNumber');
  }

  passwordMatchValidator(PersonalDetails:FormGroup){
    return PersonalDetails.controls['Password'].value===PersonalDetails!.controls['ConfirmPassword'].value?{'mismatch':false}:{'mismatch':true};
  }
}
