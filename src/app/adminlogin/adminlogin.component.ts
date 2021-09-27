import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-adminlogin',
  templateUrl: './adminlogin.component.html',
  styleUrls: ['./adminlogin.component.css']
})
export class AdminloginComponent implements OnInit {

  AdminLogin=new FormGroup({
    Username:new FormControl(),
    Password:new FormControl()
  })
  constructor() { }

  ngOnInit(): void {
  }

}
