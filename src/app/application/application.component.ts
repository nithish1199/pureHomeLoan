import { Component, OnInit } from '@angular/core';
import { PersonaldetailsService } from '../personaldetails.service';
import { Personaldetails } from '../personaldetails';


@Component({
  selector: 'app-application',
  templateUrl: './application.component.html',
  styleUrls: ['./application.component.css']
})
export class ApplicationComponent implements OnInit {
ApplicationID:any
  
  constructor() { }

  ngOnInit(): void {
    

  }

}
