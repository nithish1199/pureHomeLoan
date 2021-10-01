import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { PersonaldetailsService } from '../personaldetails.service';
import { Personaldetails } from '../personaldetails';
import { Router,ActivatedRoute } from '@angular/router';
import { MatchPasswordService } from '../match-password.service';
@Component({
  selector: 'app-apply',
  templateUrl: './apply.component.html',
  styleUrls: ['./apply.component.css']
})
export class ApplyComponent implements OnInit {  
  message!:string;
  PersonalDetails=new FormGroup({

    username:new FormControl("",[Validators.required]),
    FirstName:new FormControl("",[Validators.required]),
    LastName:new FormControl("",[Validators.required]),
    MiddleName:new FormControl(),
    EmailId:new FormControl("",[Validators.required,Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$")]),
    password:new FormControl("", [Validators.required, Validators.pattern("(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&].{8,}")]),
    ConfirmPassword:new FormControl("", [Validators.required]),
    PhoneNumber:new FormControl("", [Validators.required, Validators.pattern("^((\\+91-?)|0)?[0-9]{10}$")]),
    DateOfBirth:new FormControl("",[Validators.required]),
    Gender:new FormControl("",[Validators.required]),
    Nationality:new FormControl(null,[Validators.required]),
    AadharNumber:new FormControl(null,[Validators.required]),
    PanNumber:new FormControl(null,[Validators.required]),
  }
    //{validator:this.customValidator.passwordMatchValidator("password","ConfirmPassword")}
    //{validators:this.passwordMatchValidator}
  );
  constructor(private service:PersonaldetailsService,private route:Router,public customValidator:MatchPasswordService) { }

  ngOnInit(): void { }
  get username()
  {
    return this.PersonalDetails.get('username');
  }

  get FirstName()
  {
    return this.PersonalDetails.get('FirstName');
  }

  get MiddleName()
  {
    return this.PersonalDetails.get('MiddleName');
  }
  get LastName()
  {
    return this.PersonalDetails.get('LastName');
  }
  get EmailId()
  {
    return this.PersonalDetails.get('EmailId');
  }
  get PhoneNumber()
  {
    return this.PersonalDetails.get('PhoneNumber');
  }
  get password()
  {
    return this.PersonalDetails.get('password');
  }
  get ConfirmPassword()
  {
     return this.PersonalDetails.get('ConfirmPassword');
  }  
  get Nationality()
  {
    return this.PersonalDetails.get('Nationality');
  }
  get AadharNumber()
  {
    return this.PersonalDetails.get('AadharNumber');
  }
  get PanNumber()
  {
    return this.PersonalDetails.get('PanNumber');
  }
  get DateOfBirth()
  {
    return this.PersonalDetails.get('DateOfBirth');
  }
  get Gender()
  {
    return this.PersonalDetails.get('Gender');
  }


  // passwordMatchValidator(PersonalDetails:FormGroup){
  //    return PersonalDetails.controls['password'].value===PersonalDetails.controls['ConfirmPassword'].value?{'mismatch':false}:{'mismatch':true};
  // }
  submitperdetails()
  {
    // this.PersonalDetails=this.InsertForm.value
    console.log("hi");
    console.log(this.PersonalDetails.value)
    this.service.personaldetails(this.PersonalDetails.value).subscribe(res=>{
      console.log(res)
      console.log("personal details saved!")
      sessionStorage.setItem('username',this.PersonalDetails.controls.username.value)
      this.route.navigate(['incomedetails'])
    },
    error=>this.message="Username already taken"
    )

  }
}
