import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { LoanDetails } from '../loan-details';
import { PersonaldetailsService } from '../personaldetails.service';

@Component({
  selector: 'app-approval',
  templateUrl: './approval.component.html',
  styleUrls: ['./approval.component.css']
})
export class ApprovalComponent implements OnInit {
  loandData!: LoanDetails
  loanData = new FormGroup({
    applicationId: new FormControl(''),
    username: new FormControl(''),
    maxLoanAmountGrantable: new FormControl(''),
    interestRate: new FormControl(''),
    tenure: new FormControl(''),
    loanAmount: new FormControl(''),
  })
  constructor(private service: PersonaldetailsService, private router: ActivatedRoute,private route:Router) { }

  ngOnInit(): void {
    this.GetLoanData()
  }
  GetLoanData() {
    this.service.GetDetailsByApplicationID(this.router.snapshot.params['appid']).subscribe(data =>
      this.loanData = new FormGroup({
        applicationId: new FormControl(data['applicationId']),
        username: new FormControl(data['username']),
        maxLoanAmountGrantable: new FormControl(data['maxLoanAmountGrantable']),
        interestRate: new FormControl(data['interestRate']),
        tenure: new FormControl(data['tenure']),
        loanAmount: new FormControl(data['loanAmount']),
      })
    )

  }
  onApprove(){
    this.service.approveData(this.router.snapshot.params['appid'],this.loanData.value).subscribe()
    this.route.navigate(['pending'])
  }
  onReject(){
    this.service.rejectData(this.router.snapshot.params['appid'],this.loanData.value).subscribe()
    this.route.navigate(['pending'])
  }
}
