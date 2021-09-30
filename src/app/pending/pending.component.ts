import { Component, OnInit } from '@angular/core';
import { ApplicationDetails } from '../application-details';
import { Personaldetails } from '../personaldetails';
import { PersonaldetailsService } from '../personaldetails.service';

@Component({
  selector: 'app-pending',
  templateUrl: './pending.component.html',
  styleUrls: ['./pending.component.css']
})
export class PendingComponent implements OnInit {

 

  constructor(public service:PersonaldetailsService) { }

  ngOnInit(): void {
    
}
  }

