import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
<<<<<<< HEAD
import { PersonaldetailsService } from '../personaldetails.service';
import { Router,ActivatedRoute } from '@angular/router';
=======
import { Personaldetails } from '../personaldetails';
import { Router } from '@angular/router';
import { PersonaldetailsService } from '../personaldetails.service';
import { ConstantPool } from '@angular/compiler';

>>>>>>> b7f1a09d1d16374ba14fd7cff77246dffe0f8183

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  message!:string;
  register!:Personaldetails;
  LoginForm=new FormGroup({
    Username:new FormControl(),
    Password:new FormControl()
  });
<<<<<<< HEAD
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
=======
  constructor(private service:PersonaldetailsService,private router:Router) { }

  ngOnInit(): void {
  }

  submit()
  {
    // this.register=this.LoginForm.value
    // console.log(this.register)

    this.service.login(this.LoginForm.value).subscribe(res => {
      console.log(res)
      console.log('Login successful')
      this.router.navigate(['userdash'])
    },
    error=>this.message="Incorrect details"
    
    );

    
  }

}
>>>>>>> b7f1a09d1d16374ba14fd7cff77246dffe0f8183
