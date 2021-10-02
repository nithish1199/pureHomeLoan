import { Component, OnInit,  
  Inject  } from '@angular/core';
import { PersonaldetailsService } from '../personaldetails.service';
import {  MatDialogRef,  MAT_DIALOG_DATA  } from '@angular/material/dialog'; 
import { Personaldetails } from '../personaldetails';
import { PendingComponent } from '../pending/pending.component';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {
  
    

  constructor(private service:PersonaldetailsService) {  }

  ngOnInit(): void {
    
   
  }
  
  
}
