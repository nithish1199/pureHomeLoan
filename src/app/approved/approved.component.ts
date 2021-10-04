import { Component, OnInit } from '@angular/core';
import { DisplayDetails } from '../display-details';
import { LoanDetails } from '../loan-details';
import { PersonaldetailsService } from '../personaldetails.service';

@Component({
  selector: 'app-approved',
  templateUrl: './approved.component.html',
  styleUrls: ['./approved.component.css']
})
export class ApprovedComponent implements OnInit {
  details:DisplayDetails[]=[]
  constructor(private service:PersonaldetailsService) { }

  ngOnInit(): void {
    this.getapproves()
  }

  getapproves(){
    this.service.getapproved().subscribe((data:DisplayDetails[])=>this.details=data)
    console.log(this.details)
  }

}
