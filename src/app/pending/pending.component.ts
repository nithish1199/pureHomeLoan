import { Component, OnInit } from '@angular/core';
import { LoanDetails } from '../loan-details';
import { PersonaldetailsService } from '../personaldetails.service';
import { Personaldetails } from '../personaldetails';
import { DetailsComponent } from '../details/details.component';
import { Router } from '@angular/router';


@Component({
  selector: 'app-pending',
  templateUrl: './pending.component.html',
  styleUrls: ['./pending.component.css']
})
export class PendingComponent implements OnInit {
  details:LoanDetails[]=[]
  constructor(private service:PersonaldetailsService,private route:Router) { }

  ngOnInit(): void {
    if(sessionStorage.getItem('ADMINUSERNAME')===null){
      this.route.navigate(['adminlogin'])
    }
    this.AdminDashBoard()
  }
  AdminDashBoard(){
    this.service.GetLoanDetails().subscribe((data:LoanDetails[])=>this.details=data)
    console.log(this.details)
  }

 
}




