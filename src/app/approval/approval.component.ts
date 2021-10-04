import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { DisplayDetails } from '../display-details';
import { LoanDetails } from '../loan-details';
import { Personaldetails } from '../personaldetails';
import { PersonaldetailsService } from '../personaldetails.service';

@Component({
  selector: 'app-approval',
  templateUrl: './approval.component.html',
  styleUrls: ['./approval.component.css']
})
export class ApprovalComponent implements OnInit {
  loandData!: LoanDetails
  //personalData!:Personaldetails
  personaldData=new FormGroup({
    username:new FormControl(''),
    firstName:new FormControl(''),
    lastName:new FormControl(''),
    middleName:new FormControl(''),
    emailId:new FormControl(''),
    password:new FormControl(''),
    phoneNumber:new FormControl(''),
    dateOfBirth:new FormControl(''),
    gender:new FormControl(''),
    nationality:new FormControl(''),
    aadharNumber:new FormControl(''),
    panNumber:new FormControl('')

  })
  loanData = new FormGroup({
    applicationId: new FormControl(''),
    username: new FormControl(''),
    maxLoanAmountGrantable: new FormControl(''),
    interestRate: new FormControl(''),
    tenure: new FormControl(''),
    loanAmount: new FormControl(''),
    
  })

  incomedData=new FormGroup({
    propertyLocation:new FormControl(''),
    propertyName:new FormControl(''),
    estimatedAmount:new FormControl(''),
    typeOfEmployment:new FormControl(''),
    organizationType:new FormControl(''),
    retirementAge:new FormControl(''),
    username:new FormControl(''),
    employerName:new FormControl('')

  })

  constructor(private service: PersonaldetailsService, private router: ActivatedRoute,private route:Router) { }

  ngOnInit(): void {
    this.GetLoanData();
    this.perData();
    this.incomeData();
  }
  GetLoanData() {
    this.service.GetDetailsByApplicationID(this.router.snapshot.params['appid']).subscribe(data =>
      {this.loanData = new FormGroup({
        applicationId: new FormControl(data['applicationId']),
        username: new FormControl(data['username']),
        maxLoanAmountGrantable: new FormControl(data['maxLoanAmountGrantable']),
        interestRate: new FormControl(data['interestRate']),
        tenure: new FormControl(data['tenure']),
        loanAmount: new FormControl(data['loanAmount']),
        
      })
    }
    )

  }

  perData(){
    this.service.GetDetailsByApplicationId(this.router.snapshot.params['appid']).subscribe(data=>
      this.personaldData=new FormGroup({
        firstName:new FormControl(data['firstName']),
        middleName:new FormControl(data['middleName']),
       lastName:new FormControl(data['lastName']),
       emailId:new FormControl(data['emailId']),
       phoneNumber:new FormControl(data['phoneNumber']),
       dateOfBirth:new FormControl(data['dateOfBirth']),
       nationality:new FormControl(data['nationality']),
       aadharNumber:new FormControl(data['aadharNumber']),
       panNumber:new FormControl(data['panNumber']),
       gender:new FormControl(data['gender']),
       username:new FormControl(data['username']),
       passowrd:new FormControl(data['password'])
        }))
  }

  incomeData(){
    this.service.getincomedetails(this.router.snapshot.params['appid']).subscribe(data=>
      this.incomedData=new FormGroup({
        username:new FormControl(data['username']),
        employerName:new FormControl(data['employerName']),
        propertyLocation:new FormControl(data['propertyLocation']),
        propertyName:new FormControl(data['propertyName']),
        estimatedAmount:new FormControl(data['estimatedAmount']),
        typeOfEmployment:new FormControl(data['typeOfEmployment']),
        organizationType:new FormControl(data['organizationType']),
        retirementAge:new FormControl(data['retirementAge'])
      }))
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
