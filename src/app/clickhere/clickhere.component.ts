import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-clickhere',
  templateUrl: './clickhere.component.html',
  styleUrls: ['./clickhere.component.css']
})
export class ClickhereComponent implements OnInit {

  ForgotPassword=new FormGroup({
    Email:new FormControl(),
    OTP:new FormControl()
  })
  constructor() { }

  ngOnInit(): void {
  }

}
