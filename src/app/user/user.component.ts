import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  LoginForm=new FormGroup({
    Username:new FormControl(),
    Password:new FormControl()
  });
  constructor() { }

  ngOnInit(): void {
  }

}
