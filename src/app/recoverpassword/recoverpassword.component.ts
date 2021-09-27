import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-recoverpassword',
  templateUrl: './recoverpassword.component.html',
  styleUrls: ['./recoverpassword.component.css']
})
export class RecoverpasswordComponent implements OnInit {

  ResetPassword=new FormGroup({
    NewPassword:new FormControl(),
    ConfirmPassword:new FormControl()
  })
  constructor() { }

  ngOnInit(): void {
  }

}
