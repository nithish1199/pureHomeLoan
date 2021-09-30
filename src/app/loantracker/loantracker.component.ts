import { Component, OnInit } from '@angular/core';
import { FormControl,FormGroup,Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Account } from '../account';
import { PersonaldetailsService } from '../personaldetails.service';
@Component({
  selector: 'app-loantracker',
  templateUrl: './loantracker.component.html',
  styleUrls: ['./loantracker.component.css']
})
export class LoantrackerComponent implements OnInit {
LoanTrackingForm=new FormGroup({
  ApplicationNumber:new FormControl(null,[Validators.required]),
  Phonenumber:new FormControl(null,[Validators.required])
})
  constructor(private route:Router,private service:PersonaldetailsService) { }

  ngOnInit(): void {
  }
get applicationnumber(){
    return this.LoanTrackingForm.get('ApplicationNumber')
  }
  get phonenumber()
  {
    return this.LoanTrackingForm.get('Phonenumber');
  }
  accounts:Account[]=[]
    // Track(){
     
    //   return this.route.navigate(['userdash/+username'])
    // }
}




 
  
  

