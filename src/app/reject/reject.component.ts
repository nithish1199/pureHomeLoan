import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { LoanDetails } from '../loan-details';
//import { rejects } from 'assert';
import { PersonaldetailsService } from '../personaldetails.service';

@Component({
  selector: 'app-reject',
  templateUrl: './reject.component.html',
  styleUrls: ['./reject.component.css']
})
export class RejectComponent implements OnInit {

  loan!:LoanDetails
  maxamount!:number
  constructor(private service:PersonaldetailsService) { }

  ngOnInit(): void {
    this.rejects()
  }
  rejects(){
    this.service.getrejected().subscribe(data=>{
      console.log(data)
    });
   
   
  }

}
