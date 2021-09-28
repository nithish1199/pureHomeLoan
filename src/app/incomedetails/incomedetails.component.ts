import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { PersonaldetailsService } from '../personaldetails.service';
import { Router,ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-incomedetails',
  templateUrl: './incomedetails.component.html',
  styleUrls: ['./incomedetails.component.css']
})
export class IncomedetailsComponent implements OnInit {
  IncomeDetails!: FormGroup;

  constructor(private service:PersonaldetailsService,private route:Router) { }
  username: any;
  ngOnInit(): void {
    this.username = sessionStorage.getItem('username')
    this.IncomeDetails = new FormGroup({
      Username: new FormControl(this.username),
      PropertyLocation: new FormControl('',[Validators.required]),
      PropertyName: new FormControl('',[Validators.required]),
      EstimatedAmount: new FormControl('',[Validators.required]),
      TypeOfEmployment: new FormControl('',[Validators.required]),
      RetirementAge: new FormControl('',[Validators.required]),
      OrganizationType: new FormControl('',[Validators.required]),
      EmployerName: new FormControl('',[Validators.required]),
    }
    );
  }
  get PropertyLocation(){
    return this.IncomeDetails.get('PropertyLocation')
  }
  SubmitIncome(){
    console.log("hi");
    console.log(this.IncomeDetails.value)
    this.service.incomedetails(this.IncomeDetails.value).subscribe(res=>{
      console.log(res)
      console.log("income details saved!")
    })
    this.route.navigate(['loandetails'])

  }

}
