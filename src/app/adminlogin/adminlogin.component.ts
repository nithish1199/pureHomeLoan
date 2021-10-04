import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { PersonaldetailsService } from '../personaldetails.service';


@Component({
  selector: 'app-adminlogin',
  templateUrl: './adminlogin.component.html',
  styleUrls: ['./adminlogin.component.css']
})
export class AdminloginComponent implements OnInit {
  message!:string
  AdminLogin=new FormGroup({
    Username:new FormControl("",[Validators.required]),
    Password:new FormControl("",[Validators.required])
  })
  constructor(private service:PersonaldetailsService,private router:Router) { }

  ngOnInit(): void {
  }
  submit()
  {
    // this.register=this.LoginForm.value
    // console.log(this.register)

    this.service.adminlogin(this.AdminLogin.value).subscribe(res => {
      console.log(res)
      console.log('Login successful')
      sessionStorage.setItem('ADMINUSERNAME',this.AdminLogin.controls.Username.value);
      this.service.subject.next(true);
      this.router.navigate(['admin'])
    },
    error=>this.message="Incorrect details"
    
    );

    
  }
  get Username(){
    return this.AdminLogin.get('Username')
  }
  get  Password(){
    return this.AdminLogin.get('Password')
  }

}
