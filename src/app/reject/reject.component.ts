import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { DisplayDetails } from '../display-details';
import { LoanDetails } from '../loan-details';
//import { rejects } from 'assert';
import { PersonaldetailsService } from '../personaldetails.service';

@Component({
  selector: 'app-reject',
  templateUrl: './reject.component.html',
  styleUrls: ['./reject.component.css']
})
export class RejectComponent implements OnInit {

  details:DisplayDetails[]=[]
  maxamount!:number
  constructor(private service:PersonaldetailsService) { }

  ngOnInit(): void {
    this.rejects()
  }
  rejects(){
    this.service.getrejected().subscribe((data:DisplayDetails[])=>this.details=data)
    console.log(this.details)
   
   
  }

}
