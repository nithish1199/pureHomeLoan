import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-incomedetails',
  templateUrl: './incomedetails.component.html',
  styleUrls: ['./incomedetails.component.css']
})
export class IncomedetailsComponent implements OnInit {
  IncomeDetails=new FormGroup({
    PropertyLocation:new FormControl(),
    PropertyName:new FormControl(),
    EstimatedAmount:new FormControl(),
    TypeofEmployment:new FormControl(),
    RetirementAge:new FormControl(),
    OrganizationType:new FormControl(),
    EmployerName:new FormControl(),
  }
  );

  constructor() { }

  ngOnInit(): void {
  }

}
