import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Account } from '../account';
import { PersonaldetailsService } from '../personaldetails.service';
@Component({
  selector: 'app-loantracker',
  templateUrl: './loantracker.component.html',
  styleUrls: ['./loantracker.component.css']
})
export class LoantrackerComponent implements OnInit {
  LoanTrackingForm = new FormGroup({
    ApplicationNumber: new FormControl(null, [Validators.required]),
    Phonenumber: new FormControl(null, [Validators.required])
  })
  message!: string;
  constructor(private route: Router, private service: PersonaldetailsService) { }

  ngOnInit(): void {
  }
  get applicationnumber() {
    return this.LoanTrackingForm.get('ApplicationNumber')
  }
  get phonenumber() {
    return this.LoanTrackingForm.get('Phonenumber');
  }
  accounts: Account[] = []
  submit() {
    console.log(this.LoanTrackingForm.controls.ApplicationNumber.value)
    this.service.ltracker(this.LoanTrackingForm.controls.ApplicationNumber.value, this.LoanTrackingForm.controls.Phonenumber.value).subscribe(res => {
      console.log(res);
      this.route.navigate(['status/applicationId', { applicationId: this.LoanTrackingForm.value.ApplicationNumber }])
    },
      error => this.message = "Incorrect details"
    );
    // this.service.trackLoan(this.LoanTrackingForm.controls.ApplicationNumber.value,this.LoanTrackingForm.controls.Phonenumber.value).subscribe(res => {
    //   console.log(res)
    //   console.log('Login successful'); 
    //   this.route.navigate(['status/applicationId',{applicationId:this.LoanTrackingForm.value.ApplicationNumber}])
    // },
    // error=>this.message="Incorrect details"
    // );
  }
}








