import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router,ActivatedRoute} from '@angular/router';
import { PersonaldetailsService } from '../personaldetails.service';

@Component({
  selector: 'app-loandetails',
  templateUrl: './loandetails.component.html',
  styleUrls: ['./loandetails.component.css']
})
export class LoandetailsComponent implements OnInit {
  LoanDetails!:FormGroup;
  username:any;
  estamt:any;
  salary:any;
  maxamt:any;
  loanamt:any;
  constructor(private service:PersonaldetailsService,private route:Router) { }

  ngOnInit(): void {
    this.username=sessionStorage.getItem('username')
    this.salary=sessionStorage.getItem('salary')
    this.estamt=sessionStorage.getItem('estamt')
    this.maxamt=Number(this.estamt)*0.85
    this.loanamt=60*0.6*Number(this.salary);
    this.LoanDetails=new FormGroup({
      ApplicationID:new FormControl(),
      Username:new FormControl(this.username),
      MaxLoanAmountGrantable:new FormControl(Number(this.maxamt)),
      InterestRate:new FormControl(6.7),
      Tenure:new FormControl(),
      LoanAmount:new FormControl(Number(this.loanamt)),
      LoanStartDate:new FormControl('')
    }
    );
  }
  SubmitLoan(){
    console.log("hi");
    console.log(this.LoanDetails.value)
    this.service.loandetails(this.LoanDetails.value).subscribe(res=>{
      console.log(res)
      console.log("Loan details saved!")
    })
  }
}
