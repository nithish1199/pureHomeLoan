import { Component, OnInit } from '@angular/core';
import { LoanDetails } from '../loan-details';
import { PersonaldetailsService } from '../personaldetails.service';
import {  MatTableDataSource  } from '@angular/material/table';  
import {  SelectionModel } from '@angular/cdk/collections';  
import {  MatDialog,  MatDialogConfig  } from "@angular/material/dialog"; 
import { Personaldetails } from '../personaldetails';
import { DetailsComponent } from '../details/details.component';
import { DataSource } from '@angular/cdk/table';


@Component({
  selector: 'app-pending',
  templateUrl: './pending.component.html',
  styleUrls: ['./pending.component.css']
})
export class PendingComponent implements OnInit {
  
 
  constructor(private service:PersonaldetailsService) { }

  ngOnInit(): void {
    
  }

 
}




