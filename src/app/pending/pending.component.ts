import { Component, OnInit } from '@angular/core';
import { LoanDetails } from '../loan-details';
import { PersonaldetailsService } from '../personaldetails.service';

@Component({
  selector: 'app-pending',
  templateUrl: './pending.component.html',
  styleUrls: ['./pending.component.css']
})
export class PendingComponent implements OnInit {
details:LoanDetails[]=[]
  constructor(private service:PersonaldetailsService) { }

  ngOnInit(): void {
    this.AdminDashBoard()
  }
  AdminDashBoard(){
    this.service.GetLoanDetails().subscribe((data:LoanDetails[])=>this.details=data)
    console.log(this.details);
  }
}
