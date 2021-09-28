import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Personaldetails } from '../personaldetails';
import { Router } from '@angular/router';
import { PersonaldetailsService } from '../personaldetails.service';
import { ConstantPool } from '@angular/compiler';


@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  LoginForm=new FormGroup({
    Username:new FormControl(),
    Password:new FormControl()
  });
  constructor(private service:PersonaldetailsService,private router:Router) { }

  ngOnInit(): void {
  }
  userlogin()
  {
    console.log(this.LoginForm)
    this.service.userlogin(this.LoginForm.value).subscribe(res=>{
      console.log(res)
      console.log('login successful')
      this.router.navigateByUrl('userdash');
    })

  }

}
