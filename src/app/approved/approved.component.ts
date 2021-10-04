import { Component, OnInit } from '@angular/core';
import { PersonaldetailsService } from '../personaldetails.service';

@Component({
  selector: 'app-approved',
  templateUrl: './approved.component.html',
  styleUrls: ['./approved.component.css']
})
export class ApprovedComponent implements OnInit {

  constructor(private service:PersonaldetailsService) { }

  ngOnInit(): void {
    this.getapproves()
  }

  getapproves(){
    this.service.getapproved().subscribe(data=>{
      console.log(data)
    })
  }

}
