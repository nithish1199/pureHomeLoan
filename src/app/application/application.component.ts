import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { ApplicationDetails } from '../application-details';
import { PersonaldetailsService } from '../personaldetails.service';

@Component({
  selector: 'app-application',
  templateUrl: './application.component.html',
  styleUrls: ['./application.component.css']
})
export class ApplicationComponent implements OnInit {
  username: any;
  appid:any;
  
  constructor(private service: PersonaldetailsService,private route:Router) { }

  ngOnInit(): void {
    this.appid = sessionStorage.getItem('appid');
    
  }
  clickhere(){
    this.route.navigate(['user'])    
  }

}
