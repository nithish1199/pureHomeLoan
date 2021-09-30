import { Component, OnInit } from '@angular/core';
import { PersonaldetailsService } from '../personaldetails.service';
import { LoanDetails } from '../loan-details';
import { FormControl, FormGroup } from '@angular/forms';


@Component({
  selector: 'app-documents',
  templateUrl: './documents.component.html',
  styleUrls: ['./documents.component.css']
})
export class DocumentsComponent implements OnInit {
  [x: string]: any;
  username:any
  constructor(private service:PersonaldetailsService ) { }
  ngOnInit(): void {
    this.username=sessionStorage.getItem('username')
  }
  
  
}
