import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { PersonaldetailsService } from '../personaldetails.service';
import { Router,ActivatedRoute } from '@angular/router';

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
  constructor(private service:PersonaldetailsService, private route:Router) { }

  ngOnInit(): void {
  }
  msg!:string
  
  Login(){
    console.log(this.LoginForm)
    this.service.Login(this.LoginForm.value).subscribe(data=>{ console.log(data)},error=>this.msg="Invalid Login!") 
    this.route.navigate(['userdash/username',{username:this.LoginForm.value.Username}]);
     }
}