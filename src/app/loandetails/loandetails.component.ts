import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-loandetails',
  templateUrl: './loandetails.component.html',
  styleUrls: ['./loandetails.component.css']
})
export class LoandetailsComponent implements OnInit {

  LoanDetails=new FormGroup({
    maxAmountGrantable:new FormControl(),
    InterestRate:new FormControl(),
    Tenure:new FormControl(),
    LoanAmount:new FormControl(),
  }
  );
  constructor() { }

  ngOnInit(): void {
  }

}
